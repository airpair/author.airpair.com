module.exports = ({Post}, {Project,Query,Opts}, Shared, Lib) => ({


  validate(user) { },


  exec(cb) {
    var userId = this.user._id
    var scopes = this.user.auth.gh.scopes
    Post.getManyByQuery(Query.library(userId), Opts.postList, (e, posts) =>
                                        cb(e, e?null:{userId,scopes,posts}) )
  },


  project: Project.library


})



