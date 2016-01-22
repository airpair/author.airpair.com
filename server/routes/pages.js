module.exports = (app,mw) => {

 app.get('/', mw.$.setReturnTo,
    mw.res.forbid('authd', usr => usr, { redirect: req => '/library' }),
    mw.$.serverPage)



  app.get(['/activity',
           '/activity/post/*',
           '/editor/*',
           '/library',
           '/write',
           '/new',
           '/post-details/*',
           '/submit/*',
           '/preview/*',
           // '/forked',
           // '/reviewd',
           ],
           mw.$.authd, mw.$.angular1Page)




}
