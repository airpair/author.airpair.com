module.exports = (DAL, Data, Shared, Lib) => ({

  validate(user, post) {
    if (!Roles.isOwnerOrEditor(user, post))
      return `Post not available for publishing by you`
  },


  exec(post, cb) {
    ExpertSvc.getByQuery({userId:post.by.userId}, (e, expert) => {
      if (expert) {
        post.by.expertId = expert._id
        post.by.username = expert.username
      }
      if (!post.tmpl)
        post.tmpl = 'default'

      if (!post.meta || !post.meta.canonical)
      {
        var primarytag = _.find(post.tags,(t) => t.sort==0 || post.tags[0])
        post.meta = post.meta || {}
        post.meta.canonical = `/${primarytag.slug}/posts/${post.slug}`
      }

      if (!post.github) return cb(null, post)

      github2.getFile('admin', org, post.slug, "/post.md", 'edit', (ee, head) => {
        if (!ee && head.string)
          post.mdHEAD = head.string
        cb(ee, post)
      })
    })
  },

  project: Data.Project.library

})



