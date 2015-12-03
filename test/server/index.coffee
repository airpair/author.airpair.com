process.env.LOG_APP              = '{{undefine}}'   # app load times
process.env.LOG_AUTH             = '{{undefine}}'   # auth activity
process.env.LOG_CONF_ROUTES      = '{{undefine}}'   # routes/urls on load
process.env.LOG_MW_TRACE         = '{{undefine}}'   # middleware execution
process.env.LOG_MW_API           = '{{undefine}}'   # json reponses
process.env.LOG_MW_PAGE          = '{{undefine}}'   # GET text/html
process.env.LOG_MW_VALID         = '{{undefine}}'   # validation error output
process.env.LOG_MW_UNAUTHORIZED  = '{{undefine}}'  # unauthorized requests
process.env.LOG_WRPR             = '{{undefine}}'   # all wrappers out
process.env.LOG_WRPR_THEME_INIT  = '{{undefine}}'   # wrapper initialize calls
process.env.LOG_WRPR_GHCALL      = 'white'          # gitpublisher calls
process.env.LOG_WRPR_GHRETRY     = 'magenta'        # gitpublisher network fail / retries
process.env.LOG_WRPR_GHSTEP      = '{{undefine}}'   # gitpublisher serialization of complex


Config           = require('../../server/app.json')
Config.auth.test =
  loginFnName:   'loginAuthor'

dotEnv           = require('path').join(__dirname,'app.test.env')
{config}         = require('meanair-server').Setup('test', Config, dotEnv)


login = (req, cb) ->
  profile = FIXTURE.users[req.body.key].auth.gh
  token = _.get(profile,"tokens.#{config.auth.appKey}.token") || "test"
  config.auth.test.loginFn.call req, 'github', profile, {token}, cb


SCREAM           = require('meanair-scream')
SCREAM(__dirname, config, {login}).run()


require('./helpers/data')
require('./helpers/expects')
