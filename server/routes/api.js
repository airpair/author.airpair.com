module.exports = (app, mw) => {



  app.API('tags')
    .middleware('cachedTags')
    .get ({ use: 'authd' },
          { search:               'query.q'           })
    .end('apiJson')



  app.API('me')
    .middleware('authd cachedTags populateMe')
    .get ({ use: 'populateScopes' },
          { getLibrary:           ''                  })
    .end()



  app.API('activity')
    .params('post:Post')
    .middleware('authd cachedTags')
    .get ({ getPost:              'post',
            getRecent:            '',                 })
            // getSubmitted:         ''
            // getTag:               ''
    .end()



  // app.API('post')  // plan to rename to "post" api
  app.API('posts')
    .params('post:Post')
    .middleware('authd cachedTags populateMe')
    .post({ create:               'body'              })
    .get ({ getDetails:           'post',
            getMarkdown:          'post',
            getPreview:           'post'              })
    .get ({ use: 'populateScopes' },
          { getSubmission:        'post params.slug'  })
    .put ({ use:'limit2mb' },
          { updateMarkdown:       'post body',
            updateSync:           'post'              })
    .put ({ use:'populateAuthorExpert' },
          { updateDetails:        'post body',
            updateSubmit:         'post body.slug'    })
    .delete({ delete:             'post'              })
    .end()



}
