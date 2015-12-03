module.exports = (DAL, Data, Shared, Lib) => ({

  validate(user) { },

  exec(post, cb) {
    throw Error('Not implemented. Coming v0.6.2')
    // svc.searchMany(query.inReview(), options, select.cb.addUrl((e,r)=>{
    //   if (e || r.length != 0) return cb(e, r)
    //   options.options = opts.stale
    //   svc.searchMany(query.stale(), options, select.cb.addUrl(cb))
    // }))
  },

  project: Data.Project.recent

})



