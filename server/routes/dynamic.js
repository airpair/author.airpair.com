module.exports = (app,mw) => {

  app.get('/about', function(req, res, next) {
      req.locals.post = {
        title: 'About author.airpair',
        html: `<p>A updated concise overview is in the works. While that's being prepared, here\'s an
        <a href="https://www.airpair.com/social-authoring" target="_blank">longer version</a> published last year.</p>`
      }
      next()
    },
    mw.$.postPage)



  // app.get('/preview/:id',
    // mw.$.authd, mw.$.inflateMe, function(req, res, next) {
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

}
