module.exports = (app, mw) => {

  var {bundles} = config.http.static
  var about = _.pick(config.about, ['name','version','author','bugs','repository'])
  mw.cache('serverPage', mw.res.page('server', {about,bundles}))
  mw.cache('angular1Page', mw.res.page('angular1', {about,bundles}))
  // mw.cache('postPage',          mw.res.page('post'))


  mw.cache('cachedTags',        mw.data.cached('tags'))
  mw.cache('limit2mb',          mw.req.jsonLimit('2mb'))
  mw.cache('setAuthorExpert',
            mw.data.recast('expert','post.by.userId',{queryKey:'userId'}))


  mw.cache('setMyScopes', (req, res, next) => {
    Wrappers.GitPublisher.getScopes(req.user, (e,scopes) => {
      req.user.auth.gh.scopes = scopes ? scopes.github : []
      next(e)
    })
  })

}
