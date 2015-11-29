module.exports = (DAL, Data, Shared, Lib) =>

function(user, post, cb) {
  if (!post.submitted) return cb(null, post.md)

  var owner = _.idsEqual(post.by.userId, user._id)
              ? global.config.wrappers.gitpublisher.org
              : this.user.auth.gh.login

  Wrappers.GitPublisher.getFile(user, owner, post.slug, '/post.md', 'edit', (e, headMDfile) =>
    cb(e, e ? null : headMDfile.string)
  )
}

