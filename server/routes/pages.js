module.exports = (app,mw) => {

  var {bundle}      = config.http.static

  if (config.auth.oauth.github.clientID == '{{required-for-oauth-to-work}}')
    Object.assign(app.locals, { warnings: ['GitHub OAuth not configured. Login will not work...'] })

  app.locals = _.extend(app.locals, {bundle})

  mw.cache('serverPage', mw.res.page('server'))
  mw.cache('angular1Page', mw.res.page('angular1'))

  app.get('/', mw.$.setReturnTo,
    mw.res.unauthorized(usr => usr, req => '/library'),
    mw.$.serverPage)

  app.get(['/library',
           // '/drafts',
           // '/in-review',
           // '/published',
           '/new',
           '/editor/*',
           '/post-details/*',
           '/submit/*',
           '/preview/*',
           // '/forked',
           // '/reviewd',
           ],
           mw.$.authd, mw.$.angular1Page)

}
