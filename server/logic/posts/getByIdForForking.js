module.exports = (DAL, Data, Shared, Lib) => ({

  validate(user) { },

  exec(post, cb) {
    // var {slug} = post
    // post = selectFromObject(post, select.editInfo)
    // post.submit = { repoAuthorized: false, slug }
    // if (!this.user.social || !this.user.social.gh) return cb(null, post)
    // post.submit.owner = this.user.social.gh.username
    // $callSvc(UserSvc.getProviderScopes, this)((e, providers) => {
    //   if (e && e.message == "GitHub token auth failed")
    //     post.submit.repoAuthorized = false
    //   else if (e)
    //     return cb(Error(`getByIdForForking. Failed to get user providers scopes for [${this.user._id}][${this.user.social.gh.username}]`))
    //   else {
    //     var scope = _.find(providers.github, (s) => s.indexOf("repo") != -1)
    //     post.submit.repoAuthorized = scope != null
    //   }
    //   cb(null, post)
    // })
  },

  project: Data.Project.library

})



