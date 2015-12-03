module.exports = ({Post}, {Query,Project,Opts}, Shared, Lib) => ({


  validate(user) { },


  exec(cb) {
    //-- Query to be greatly improved
    var q = Query.notBy(this.user._id)
    q.submitted = { $exists: true }
    q['$and'].push({'tmpl' : { '$ne': 'blank' }})
    q['$and'].push({'tmpl' : { '$ne': 'faq' }})
    Post.getManyByQuery(q, Opts.recentlyUpdated, cb)
  },


  project: Project.recent

})



