module.exports = (app, mw) => {


  app.use(mw.$.cachedTags)


  app.API('tags')
    .get ({ use: 'authd' },
          { search:               'query.q'                })


  app.API('me')
    .uses('authd inflateMe')
    .get ({ use: 'setMyScopes' },
          { getLibrary:           ''                       })


  app.API('activity')
    .params('post')
    .uses('authd')
    .get ({ getPost:              'post',
            getRecent:            '',                      })
            // getSubmitted:         ''
            // getTag:               ''


  // app.API('post')  // plan to rename to "post" api
  app.API('posts')
    .params('post')
    .uses('authd inflateMe')
    .post({ create:               'body'                   })
    .get ({ getDetails:           'post',
            getMarkdown:          'post',
            getPreview:           'post'                   })
    .get ({ use: 'setMyScopes' },
          { getSubmission:        'post query.slug'        })
    .put ({ use:'limit2mb' },
          { updateMarkdown:       'post body',
            updateSync:           'post'                   })
    .put ({ use:'setAuthorExpert' },
          { updateDetails:        'post body',
            updateSubmit:         'post body.slug'         })
    .delete({ delete:             'post'                   })

}
