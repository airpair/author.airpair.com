module.exports = ({Post}, Data, {touchMeta}, {author,authorOrForker}) => ({


  validate(user, original, update) {
    if (!authorOrForker(user, original))
      return `Post[${original._id}] markdown edit fail. Did you <a href="forks/${original._id}">fork</a> ${original.title} already?`

    if (!original.submitted && !author(user,original))
      return `Update markdown of draft fail. Post [${original.title}] not authored by you`

    if (!update.md || update.md == '')
      return `Post markdown edit fail. Markdown empty...`

    if (original.submitted && !update.commitMessage || update.commitMessage == '')
      return `Commit Message required`
  },


  exec(original, update, cb) {
    var {commitMessage,meta} = update
    var {_id,meta} = original
    var {user} = this

    if (!original.submitted) {
      meta = touchMeta(meta, 'editDraft', user)
      return Post.updateSet(_id, {md:update.md,meta}, cb)
    }

    var isAuthor = author(user, original)
    var repoOwner = isAuthor ? global.config.gitPublisher.org
                             : this.user.social.gh.username

    Wrappers.GitPublisher.updateFile(user, repoOwner, original.slug, 'post.md', 'edit', update.md, commitMessage, (e, r) => {
      if (e) return cb(e)
      var ups = {}
      if (isAuthor) {
        if (!original.published) {
          ups.md = update.md
          // ups.publishedCommit = result.commit
          ups.meta = touchMeta(meta, 'editInreview', user)
        } else {
          ups.meta = touchMeta(meta, 'editHead', user)
        }
      } else {
        ups.meta = touchMeta(meta, 'editFork', user)
      }

      Post.updateSet(_id, ups, cb)
    })
  },


  project: Data.Project.edit

})

