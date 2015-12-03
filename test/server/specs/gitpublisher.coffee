internals = ->


  beforeEach ->
    @gpSTUB = (op, fixtureKeySuffix) ->
      fixtureKey = 'gh_'+op.replace('.','_')+'_'+fixtureKeySuffix
      STUB.wrapper('GitPublisher').api(op).fix(fixtureKey)


  IT 'Fails without token', ->
    {tst1} = FIXTURE.users
    Wrappers.GitPublisher.getScopes tst1, (e,r) ->
      expect(r).to.be.undefined
      EXPECT.contains(e.message, "token not present")
      DONE()


  IT 'Fails with invalid token', ->
    STUB.wrapper('GitPublisher').api('user.get').params(FIXTURE.wrappers.gh_user_bad_creds)
    tst5 = FIXTURE.clone('users.tst5')
    tokens = {}
    tokens[config.auth.appKey] = { token: 'asdfasdfasdfasdf' }
    tst5.auth.gh.tokens = tokens
    Wrappers.GitPublisher.getScopes tst5, (e,r) ->
      expect(r).to.be.undefined
      EXPECT.contains(e.message, "GitHub token auth failed")
      DONE()


  IT 'Returns "public_repo" and "user" for valid token', ->
    STUB.wrapper('GitPublisher').api('user.get').fix('gh_user_scopes')
    STORY.newUser 'tst1', { ghKey: 'author1' }, (key) ->
      user = FIXTURE.users[key]
      Wrappers.GitPublisher.getScopes user, (e,r,payload) ->
        expect(e).to.be.null
        expect(r.github.length).to.equal(2)
        expect(r.github[0]).to.equal('public_repo')
        expect(r.github[1]).to.equal('user')
        DONE()


  IT 'Executes as as admin', ->
    @gpSTUB('repos.get','47264557')
    repo = 'steps-1449064887'
    Wrappers.GitPublisher.getRepo 'admin', org, repo, (e,r,payload) ->
      expect(e).to.be.null
      expect(r.id).to.equal(47264557)
      expect(r.name).to.equal('steps-1449064887')
      DONE()


  IT 'Executes all green step sequence', ->
    @gpSTUB('repos.createFromOrg','47260144')
    @gpSTUB('repos.createFile','1449060354_readme')
    @gpSTUB('gitdata.createReference','1449060354_editBranch')
    @gpSTUB('orgs.createTeam','1449067207')
    @gpSTUB('user.editOrganizationMembership','1449067207')
    @gpSTUB('orgs.addTeamMembership','1862308_airpairtest1')
    # @gpSTUB('repos.createFile','repos_createFile_1449060354_postMD')

    STORY.newUser 'tst1', { ghKey: 'author1' }, (key) ->
      user = FIXTURE.users[key]
      repo = "steps-#{@timeSeed}"
      postId = ObjectId()
      postMD = "## steps test on #{@timeSeed}"
      readmeMD = "reamed generated #{@timeSeed}"
      Wrappers.GitPublisher.setupPostRepo user, repo, postId, postMD, readmeMD, (e,r) ->
        expect(e).to.be.null
        expect(r).to.exist
        expect(r.url).to.equal("https://github.com/#{org}/#{repo}")
        expect(r.owner).to.equal(org)
        expect(r.authorTeamId).to.exist
        expect(r.author).to.equal(FIXTURE.githubusers['author1'].username)
        EXPECT.contains(r.authorTeamName, repo)
        DONE()


  SKIP 'Successful retry after one fail', ->
  SKIP 'Stops retrying after cfg.retry.max', ->


module.exports = ->

  before ->
    global.org = global.config.wrappers.gitPublisher.org

  after ->
    delete global.org


  DESCRIBE "WRAPPER INTERNALS", internals
