var cfg                      = null
var FnUtil                   = require('meanair-shared').TypesUtil.Function


var wrapper = {
  name: 'GitPublisher',
  init() {
    cfg                      = global.config.wrappers.gitPublisher
    cfg.appKey               = config.auth.appKey
    cfg.userAgent            = config.auth.oauth.github.userAgent
    cfg.retryErrors          = new RegExp(/(not found|repository is empty)/)
    if (!cfg.userAgent)      throw Error("userAgent required from config.auth.oauth.github")

    var API = global.API_GITHUB || require("github")

    this.api = new API({ version: "3.0.0", protocol: "https", timeout: 5000,
      headers: { "user-agent": cfg.userAgent }, debug: cfg.debug===true })

    this.api.setAuthToken = (user) => {
      if (user == 'admin')
        return this.api.authenticate({type:"oauth",token:cfg.adminToken})

      if (!_.get(user,`auth.gh.tokens.${cfg.appKey}.token`))
        throw Error(`GH.setToken fail. gh ${cfg.appKey}.token not present on [${user.name}::${user._id}]`)

      this.api.authenticate({type:"oauth",token:user.auth.gh.tokens[cfg.appKey].token})
    }
  }
}


var retryableFns = {
  getScopes(user, cb) {
    var payload = {}
    this.api.user.get(payload, (e, r) => {
      if (e && e.message.match(/Bad credentials/))
        e = Error(`GitHub token auth failed for ${user.name||user}`)
      if (!e)
        r = { github: r.meta['x-oauth-scopes'].split(/,\W*/) }

      cb(e,r,payload)
    })
  },
  getRepo(user, owner, name, cb) {
    var payload = { user: owner, repo: name }
    this.api.repos.get(payload, (e,r)=>cb(e,r,payload))
  },
  createOrgRepo(user, org, name, description, private, cb) {
    var payload = { org, name, description, private }
    this.api.repos.createFromOrg(payload, (e,r)=>cb(e,r,payload))
  },
  //create a team w/ write access to a repo (name after repo)
  createRepoTeam(user, org, repo, name, permission, cb) {
    var payload = { org, name, permission, repo_names: [`${org}/${repo}`]}
    this.api.orgs.createTeam(payload, (e, r) => {
      if (!e) return cb(e, r, payload)
      var parsedError = JSON.parse(e.message)
      var errors = parsedError.errors
      if (errors && errors.length == 1 && errors[0].code === "already_exists"){
        //team is already created, list teams and send that back
        this.api.getTeamId(org, name, (e, r) => cb(e, r, payload))
      } else
        return cb(e,r,payload)
    })
  },
  createBranch(user, org, repo, branchName, offCommit, cb) {
    var payload = { user: org, repo, sha: offCommit.sha, ref: `refs/heads/${branchName}` }
    this.api.gitdata.createReference(payload, (e,r)=>cb(e,r,payload))
  },
  getPullRequests(user, owner, repo, cb) {
    var payload = { user: owner, repo, state: 'all', per_page: 100 }
    this.api.pullRequests.getAll(payload, (e,r) => {
      if (e) return cb(e, r, payload)
      if (r && r.meta) delete r.meta
      cb(e, r, payload)
    })
  },
  addFile(user, repoOwner, repo, path, branch, content, message, cb) {
    var payload = { content: new Buffer(content).toString('base64'),
      user: repoOwner, repo, path, message, branch: branch || 'master' }
    this.api.repos.createFile(payload, function(e, r) {
      if (e) {
        var parsedError = JSON.parse(e.message)
        if (/Missing required keys.*sha/.test(parsedError.message))
          e = "file already exists"
      }
      cb(e,r,payload)
    })
  },
  getFile(user, repoOwner, repo, path, branch, cb) {
    var payload = { user: repoOwner, repo, path, ref: branch }
    this.api.repos.getContent(payload, (e, r) => {
      // if (e && cb.retries > 0) return verboseErrorCB(cb, e, 'getFile', `${repoOwner}/${repo} ${path}:${branch}`)
      //-- check the case where repos have been deleted manually (repo doesn't exist)
      // else
      if (e && e.code == 404)
      {
        // if (logging) $log(`getFile.getContent.404`.red, `${repoOwner}/${repo}/${path}:${branch}`, e)
        this.api.repos.get({ user: repoOwner, repo }, (err, response) => {
          // if (logging) $log('getFile.getRepo'.red, err, response)
          if (err && err.code === 404)
            return cb(Error(`No repo at ${repoOwner}/${repo}... Create a new fork?`))
          else if (err)
            return cb(err)
          else
            return cb(Error(`${path} on "edit" branch of repo ${repoOwner}/${repo} missing or corrupted.`))
        })
      }
      else if (e) {
        cb(e,null,payload)
        // verboseErrorCB(cb, e, 'getFile', `${repoOwner}/${repo} ${path}:${branch}`)
      } else {
        r.string = new Buffer(r.content, 'base64').toString('utf8')
        cb(null,r,payload)
      }
    })
  },
  updateFile(user, repoOwner, repo, path, branch, content, message, cb) {
    branch = branch || 'master'
    var payload = { user: repoOwner, repo, path, branch, ref: branch }

    this.api.repos.getContent(payload, (ee, file) => {
      if (ee) return cb(ee, file, payload)
      Object.assign(payload, { message, sha: file.sha,
        content: new Buffer(content).toString('base64') })
      this.api.repos.updateFile(payload, (e,r)=>cb(e,r,payload))
    })
  },
  addTeamMember(user, teamId, member, cb) {
    var payload = { id: teamId, user: member.username, role: 'member' }
    this.api.orgs.addTeamMembership(payload, (e,r) => cb(e,r,payload))
  },
  confirmOrgMembership(user, org, teamMember, cb) {
    if (teamMember && teamMember.state == 'active')
      return cb(null, {state:'active'})

    var payload = { org, state: 'active' }
    this.api.user.editOrganizationMembership(payload, (e,r) => cb(e,r,payload))
    //make the org public on their profile
    // _.delay(() => {
    //   gh.api.orgs.publicizeMembership({ org, user: member.username }, () => {
    //     $log(`${member.username} membership publicized`)}, 1500)
    // })
  }
}


Object.keys(retryableFns).forEach(function(fnName) {
  wrapper[fnName] = function() {
    var {hyjackCallback} = FnUtil.init(this, arguments)
    var retries = cfg.retry.max
    var user = arguments[0]
    var by = user.name || user
    try {
      this.api.setAuthToken(user)
    } catch (e) {
      var cb = [].slice.call(arguments).pop()
      return cb(e)
    }
    $logIt('wrpr.ghcall', `gh.${fnName}:${retries}`, by)
    var attempt = hyjackCallback(retryableFns[fnName], done => (e,r,payload) => {
      this.retries--
      if (e) {
        var err = e.message.toLowerCase()
        if (err.match(/bad credentials/))
          return done(Error(`GitPublisher.${fnName} fail. ${by} Token not valid for operation`))
        if (this.retrying > 0 && err.match(retryError)) {
          $logIt('wrpr.ghretry', `gh.${fnName} retrying(this.retrying) in ${cfg.retry.delay}ms`, e)
          return _.delay(attempt, cfg.retry.delay)
        }
        // else {
          // console.log(`wrpr    gh.${fnName}.err`.red, by, payload, e) // r == api "params"
        // }
      }
      done(e,r,payload)
    })
    attempt()
  }
})


//-- These ones we don't want wrapped
wrapper.checkOrgRepoAvailabiliy = function(user, repoName, cb) {
  this.getRepo(user, cfg.org, repoName, (e,r) => {
    if (r) cb(null, { unavailable: `Try another name. Repo ${cfg.org}/${repoName} already exists` })
    else if (e.code == 404) cb(null, { available: `Repo ${cfg.org}/${repoName} is available` })
    else cb(e)
  })
}


var Step = (wrpr, fullRepoName, errorCB) => function() {
  var args = [].slice.call(arguments)
  var opName = args.shift()
  var by = (args[0].name || args[0])
  var opLog = `${fullRepoName} ${opName} ${('by '+by).dim}`.white
  var op = wrpr[opName]
  var cb = args.pop()
  args.push((e,r,payload) => {
    // if (e) {
    //   $log('gh.error.payload', payload)
    //   $log('gh.error.raw', e)
    //   $log('gh.error.raw', JSON.stringify(e))
    // }

    if (e && e.constructor !== String) {
      if (e.message.constructor === String && e.message.match('message'))
        e = JSON.parse(e.message)
      $logIt('wrpr.ghstep','step.fail     '.red, opLog.red, e.message.white, payload)
      return errorCB(e)
    }
    else if (e) $logIt('wrpr.ghstep','step.unsmooth', opLog, e, JSON.stringify(payload))
    else $logIt('wrpr.ghstep','step.success', opLog)
    cb(e, r)
  })
  $logIt('wrpr.ghstep','step.begin    ', opLog)
  op.apply(wrpr, args)
}


wrapper.setupPostRepo = function(user, repoName, postId, postMD, readmeMD, cb) {
  var org = cfg.org
  var url = `https://github.com/${org}/${repoName}`
  var fullRepoName = `${org}/${repoName}`
  var authorTeamName = `${repoName}-${postId.toString().slice(-8)}-author`
  var username = user.auth.gh.login
  var step = Step(this, fullRepoName, cb)
  var r = { owner:org, author: username, authorTeamName, url }

  step('createOrgRepo', 'admin', org, repoName, "", false, (e1, repo) =>
    step('addFile', 'admin', org, repoName, "README.md", "master", readmeMD, "Add README.md", (e2, readme) =>
      // if (e2) {
        // $log(`add README.md failed on repo ${fullRepoName}`.magenta, e2.message || e2)
        // if (e2 !== "file already exists")
      step('createBranch', 'admin', org, repoName, 'edit', readme.commit, (e3, branchRef) =>
        step('createRepoTeam', 'admin', org, repoName, authorTeamName, 'push', (e4, authorTeam) =>
          step('addTeamMember', 'admin', authorTeam.id, {username}, (e5, teamMember) =>
            step('confirmOrgMembership', user, org, teamMember, (e6, membership) =>
              step('addFile', user, org, repoName, "post.md", "edit", postMD, "Initial Commit", (e6, post) => {
                Object.assign(r,{authorTeamId:authorTeam.id})
                if (e6 !== "file already exists") return cb(e6, e6 ? null : r)
                step('updateFile', user, org, repoName, "post.md", post.md,
                  "Reinitialize", (e7, post) => cb(e7, e7 ? null : r))
              })
            )
          )
        )
      )
    )
  )
}

module.exports = wrapper

