module.exports = (app, mw) => {

  if (global.config.env == 'dev') {
    mw.cache('warnings', (req, res, next) => {
      var warn = []

      if ( config.auth.oauth.github.clientID.match('{{require') )
        warn.push('GitHub OAuth not configured. Login will not work...')
      if ( config.wrappers.gitPublisher.adminToken.match('{{require') )
        warn.push('GitPublisher not configured. Editing / publishing will not work...')

      if (warn.length > 0)
        Object.assign(app.locals, {warnings:warn})

      next()
    })

    app.use(mw.$.warnings)
  }

}
