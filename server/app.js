function run(config, {MAServer,tracking,done}) {

  global.config         = config

  var analytics         = MAServer.Analytics(config, tracking)
  var app               = MAServer.App(config, done)
  var model             = require('meanair-model')(done)

  model.connect(() =>

    app.meanair.lib({passport:require('passport')})
               .set(model, {analytics})
               .merge(require('meanair-auth'))
               .chain(config.middleware, config.routes)
               .run()

  )

  return app

}


module.exports = { run }
