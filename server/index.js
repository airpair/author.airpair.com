var env       = process.env.ENV || 'dev'


//-- API docs & examples (soon :p) at => airpair.com/meanair/config
var Config    = require('./app.json')
var dotEnv    = require('path').join(__dirname,`app.${env}.env`)
var {config}  = require('meanair-server').Setup(Config, env, dotEnv)


require('./app').run(config, e => e ? $log('APP.ERROR'.red, e) : '')
