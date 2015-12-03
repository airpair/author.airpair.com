module.exports = (app, mw) => {

  mw.cache('cachedTags', mw.data.cacheReady('tags'))
  mw.cache('limit2mb', mw.res.jsonLimit('2mb'))
  mw.cache('populateAuthorExpert', mw.data.populate('expert:post:by.userId','userId'))

  mw.cache('populateScopes', (req, res, next) => {
    Wrappers.GitPublisher.getScopes(req.user, (e,scopes) => {
      req.user.auth.gh.scopes = scopes ? scopes.github : []
      next(e)
    })
  })



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
