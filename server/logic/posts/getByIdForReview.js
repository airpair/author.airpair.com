module.exports = (DAL, Data, Shared, Lib) => ({

  validate(user) { },

  exec(post, cb) {
    Post.getById(_id, { select: select.display }, (e,r) => {
      if (e||!r) return cb(e,r)
      if (r.published) return cb(null, {published:true, url: r.meta.canonical})
      if (!r.submitted) return cb(null, null)
      select.cb.displayView(this.user==null, null, cb)(e,r)
    })
  },

  project: Data.Project.library

})



