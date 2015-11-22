envFile             = require('path').join(__dirname,'app.test.env')
overrides           = require('../../server/app.json')
overrides.auth.test = {
  loginFnName: 'oauth'
}
overrides.log = Object.assign(overrides.log, {
  # test:        { verbose: true }     # show detailed errors
})

# overrides.model.mongoUrl = 'mongodb://localhost/consult-airpair-test'
process.env.LOG_CONF_THEME_ROUTES = '{{undefine}}'  # hide routes showing on load
process.env.LOG_AUTH_THEME_LOGIN = '{{undefine}}'  # hide login output
process.env.LOG_AUTH_THEME_LINK = '{{undefine}}'  # hide login output
process.env.LOG_MW_THEME_TRACE = '{{undefine}}'  # hide login output
process.env.LOG_MW_THEME_API = '{{undefine}}'  # hide login output
process.env.LOG_MW_THEME_PAGE = '{{undefine}}'  # hide login output
process.env.LOG_MW_THEME_VALID = '{{undefine}}'  # hide login output
process.env.LOG_WRAPPERS_THEME_INIT = '{{undefine}}'  # hide routes showing on load


{config}         = require('meanair-server').Setup('test', overrides, envFile)


global.timeSeed = -> moment().format('X')


login = (req, cb) ->
  profile = FIXTURE.users[req.body.key].auth.gh
  config.auth.test.loginFn.call req, 'github', profile, {token:'test'}, cb


SCREAM          = require('meanair-scream')
SCREAM(__dirname, config, {login}).run()

