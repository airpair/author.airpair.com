var env = process.env.ENV || 'dev'

//-- API docs & examples (soon :p) at => airpair.com/meanair/config
var overrides = require('./app.json')
var envFile   = require('path').join(__dirname,`app.${env}.env`)
var {config}  = require('meanair-server').Setup(env, overrides, envFile)


require('./app').run(config, e => e ? $log('APP.ERROR'.red, e) : '')
