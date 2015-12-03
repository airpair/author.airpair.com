module.exports = (DAL, Data, Shared, {authorOrForker,getHeadMarkdown}) => ({

  validate(user, post) {
    if (!authorOrForker(user, post))
      return `You must edit your own fork. Did you fork the post already?`
  },

  exec(post, cb) {
    if (!post.submitted)
      return cb(null, post)

    var {user} = this
    var isForker = _.find(post.forkers, f => _.idsEqual(user._id, f.userId))
    post.repo = (isForker ? user.auth.gh.login
                          : config.wrappers.gitPublisher.org)+'/'+post.slug

    getHeadMarkdown(user, post, (e, headMD) => {
      post.headMD = headMD
      cb(e, post)
    })
  },

  project: Data.Project.edit

})



