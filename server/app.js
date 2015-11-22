function run(config, done) {

  global.config         = config

  var app               = require('meanair-server').App.init(config, done)
  var model             = require('meanair-model')(done)

  if (config.env == 'dev')
    app.meanair.lib({livereload:require('connect-livereload')})


  model.connect(() =>

    app.meanair.lib({passport:require('passport')})
               .set(model)
               .merge(require('meanair-auth'))
               .use(config.middleware)
               .serve(config.routes)
               .run()

  )

  return app

}


module.exports = { run }
