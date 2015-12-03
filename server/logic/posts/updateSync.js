module.exports = ({Post}, Data, {touchMeta}, {author,authorOrForker}) => ({


  validate(user, original) {
    var isEditor = user.roles && _.contains(user.roles, "editor")
    var isOwner =  _.idsEqual(original.by.userId, user._id)
    if (!isOwner && !isEditor)
      return `Not authorized`
    if (original.published && !isEditor)
      return `Only editors can update published posts`
  },


  exec(original, cb) {
    var {org} = config.wrappers.gitPublisher
    var meta = touchMeta(original.meta, 'syncHEAD', this.user)
    Wrappers.GitPublisher.getFile(this.user, org, original.slug, "/post.md", 'edit', (e, head) => {
      if (e) return cb(e)
      var commit = head.sha
      var md = head.string
      var publishedCommit = commit
      // if (original.published) {
      //   var publishHistory = post.publishHistory || []
      //   publishHistory.push({
      //     commit, touch: svc.newTouch.call(this, 'publish')})
      //   var publishedBy = _.pick(this.user, '_id', 'name', 'email')
      //   var publishedUpdated = new Date()
      // }
      Post.updateSet(original._id, {meta,md,publishedCommit}, cb)
    })
  },


  project: Data.Project.edit


})

