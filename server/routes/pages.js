module.exports = (app,mw) => {

  var {bundle}      = config.http.static

  app.locals = _.extend(app.locals, {bundle})

  mw.cache('postPage', mw.res.page('post'))
  mw.cache('serverPage', mw.res.page('server'))
  mw.cache('angular1Page', mw.res.page('angular1'))

  app.get('/', mw.$.setReturnTo,
    mw.res.unauthorized(usr => usr, req => '/library'),
    mw.$.serverPage)


  // app.get('/preview/:id',
    // mw.$.authd, mw.$.populateMe, function(req, res, next) {
    // $callSvc(API.Posts.svc.getByIdForPreview, req)(req.params.id, (e,r) => {
    //   if (!r) return res.redirect('/posts/me')
    //   if (!_.idsEqual(r.by.userId,req.user._id) &&
    //       !_.contains(req.user.roles,'admin') &&
    //       !_.find(r.forkers,(f)=>_.idsEqual(f.userId,req.user._id))
    //     )
    //     return next(Error("Post unavailable for you to preview, did you fork it already?"))
    //   req.post = r
    //   next()
      // })
      // next();
    // },
    // mw.$.postPage)


  app.get(['/library',
           // '/in-review',
           '/new',
           '/editor/*',
           '/post-details/*',
           '/submit/*',
           '/preview/*',
           '/activity',
           '/activity/post/*'
           // '/forked',
           // '/reviewd',
           ],
           mw.$.authd, mw.$.angular1Page)

}
