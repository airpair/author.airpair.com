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
        e = Error("GitHub token auth failed")
      if (!e)
        r = { github: r.meta['x-oauth-scopes'].split(/,\W*/) }

      cb(e, r, payload)
    })
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
          return done(Error(`GitHub.${fnName} fail. Token not valid for operation`))
        if (this.retrying > 0 && err.match(retryError)) {
          $logIt('wrpr.ghretry', `gh.${fnName} retrying(this.retrying) in ${cfg.retry.delay}ms`, e)
          return _.delay(attempt, cfg.retry.delay)
        }
        // else {
          // console.log(`wrpr    gh.${fnName}.err`.red, by, payload, e) // r == api "params"
        // }
      }
      done(e,r)
    })
    attempt()
  }
})


module.exports = wrapper

