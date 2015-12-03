module.exports = ({Post}, {Project,Query,Opts}, Shared, Lib) => ({


  validate(user) { },


  exec(cb) {
    var userId = this.user._id
    var scopes = this.user.auth.gh.scopes
    Post.getManyByQuery(Query.library(userId), Opts.postList, (ee, posts) =>
      Post.getManyByQuery(Query.notBy(userId), Opts.recentlyUpdated, (e, recent) =>
        cb(ee||e,ee||e?null:{userId,scopes,posts,recent})
      ))
  },


  project: Project.library


})



