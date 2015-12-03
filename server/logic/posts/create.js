module.exports = ({Post}, Data, Shared, Lib) => ({

  validate(user, post)
  {
    if (!post.title) return `Post create fail. Title required`
    if (post.assetUrl) return `Post create fail. Unexpected assetUrl`
    if (post.md) return `Post create fail. Unexpected markdown`
    // if (!post.by.bio) return `Post author bio required`
  },

  exec(o, cb) {
    o.created = new Date()
    o.by = Data.Project.author(this.user)
    o.md = "new"
    o.meta = Shared.touchMeta(null, 'create', this.user)
    // -- legacy
    // o.editHistory = [o.lastTouch]
    Post.create(o, cb)
    // UserSvc.changeBio.call(this, o.by.bio,() => {})
  },

  project: Data.Project.details

})



