module.exports = (DAL, Data, Shared, {authorOrForker,getHeadMarkdown}) => ({

  validate(user, post) {
    if (!authorOrForker(user, post))
      return `Post cannot be edited. Did you fork the post already?`
  },

  exec(post, cb) {
    if (!post.submitted)
      return cb(null, post)

    getHeadMarkdown(this.user, post, (e, headMD) => {
      post.headMD = headMD
      cb(e, post)
    })
  },

  project: Data.Project.edit

})



