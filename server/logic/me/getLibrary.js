module.exports = ({Post}, {Project,Query,Opts}, Shared, Lib) => ({

  validate(user) { },

  exec(cb) {
    var userId = this.user._id
    Wrappers.GitPublisher.getScopes(this.user, (eee,scopes) => {
      Post.getManyByQuery(Query.library(userId), Opts.postList, (ee,mine) => {
        Post.getManyByQuery({}, Opts.newest, (e, newest) => {
          cb(ee||e,ee||e?null:{userId,mine,newest,scopes})
        })
      })
    })

  },

  project: Project.library

})



