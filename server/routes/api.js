module.exports = (app, mw) => {


  mw.cache('cachedTags', mw.data.cacheReady('tags'))
  mw.cache('limit2mb', mw.res.jsonLimit('2mb'))
  // mw.cache('authorExpert', mw.data.populate('expert:post', 'by.userId'))


  app.API('tags')
    .middleware('cachedTags')
    .get ({ use: 'authd' },
          { search:               'query.q'      })
    .end('apiJson')


  app.API('me')
    .middleware('authd cachedTags populateMe')
    .get ({ getLibrary:           ''             })
    .end()


  app.API('posts')
    .params('post:Post')
    .middleware('authd cachedTags populateMe')
    .post({ create:               'body'  })
    .get ({ getDetails:           'post',
            getMarkdown:          'post',
            getPreview:           'post'         })
    .put ({ use:'limit2mb' },
          { updateMarkdown:       'post body'    })
    .put ({ updateDetails:        'post body'    })
    .delete({ delete:             'post' })
    .end()


}
