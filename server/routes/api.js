module.exports = (app, mw) => {

  mw.cache('cachedTags', mw.data.cacheReady('tags'))


  app.API('tags')
    .middleware('cachedTags')
    .get ({ use: 'authd' },
          { search:               'query.q' })
    .end('apiJson')


  app.API('me')
    .middleware('authd cachedTags')
    .get ({ getLibrary:           ''})
    .end()


}
