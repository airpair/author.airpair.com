var MAServer  = require('meanair-server')
var config    = MAServer.Config(__dirname, process.env.ENV || 'dev', true)

require('./app').run(config, {
  MAServer,
  tracking: require('./app.track'),
  done: e => e ? $log('APP.ERROR'.red, e) : ''
})
