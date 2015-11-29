module.exports = (DAL, Data, Shared, {authorOrForker,getHeadMarkdown}) => ({

  validate(user, post) {
    //-- TODO: Allow editors to preview without a fork

    if (!authorOrForker(user, post))
      return `Post[${post._id}] preview fail. Did you <a href="forks/${post._id}">fork</a> ${original.title} already?`

    if (!post.tags || post.tags.length == 0)
      return `Cannot preview Post[${post._id}] until it has tags`
  },

  exec(post, cb) {
    getHeadMarkdown(this.user, post, (e, headMD) => {
      post.headMD = headMD
      cb(e, post)
    })
  },

  project: Data.Project.preview

})



