MAServer  = require('meanair-server')

## Comment flags on and off to tune log output
process.env.LOG_APP              = '{{undefine}}'   # app load times
process.env.LOG_AUTH             = '{{undefine}}'   # auth activity
process.env.LOG_CFG_ROUTE        = '{{undefine}}'   # routes/urls on load
process.env.LOG_MW_TRACE         = '{{undefine}}'   # middleware execution
process.env.LOG_MW_API           = '{{undefine}}'   # json reponses
process.env.LOG_MW_PAGE          = '{{undefine}}'   # GET text/html
process.env.LOG_MW_VALID         = '{{undefine}}'   # validation error output
process.env.LOG_MW_FORBID        = '{{undefine}}'   # unauthorized requests
process.env.LOG_WRPR             = '{{undefine}}'   # all wrappers out
process.env.LOG_WRPR_INIT        = '{{undefine}}'   # wrapper initialize calls
process.env.LOG_WRPR_GHCALL      = 'white'          # gitpublisher calls
process.env.LOG_WRPR_GHRETRY     = 'magenta'        # gitpublisher network fail / retries
process.env.LOG_WRPR_GHSTEP      = '{{undefine}}'   # gitpublisher serialization of complex


appRoot          = __dirname.replace('test', '')
config           = MAServer.Config(appRoot, 'test', true)
config.auth.test = loginFnName: 'loginAuthor'


OPTS = {}
OPTS.onReady = -> require('./helpers')
OPTS.login = (req, cb) ->
  profile = FIXTURE.users[req.body.key].auth.gh
  token = _.get(profile,"tokens.#{config.auth.appKey}.token") || "test"
  config.auth.test.loginFn.call req, 'github', profile, {token}, cb



SCREAM = require('meanair-scream')(__dirname, OPTS)
SCREAM.run({
  config,
  opts: {
    MAServer,
    tracking: require('../../server/app.track') }
})
