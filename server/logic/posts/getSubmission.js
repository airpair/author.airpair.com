module.exports = ({Post}, Data, Shared, {author}) => ({


  validate(user, post, slug) {

    if (!author(user, post))
      return `Post[${post._id}] belongs to another user`

    if (post.submitted)
      return `Post[${post._id}] previously submitted ${post.submitted}`

    if (user.auth.gh.scopes.indexOf("public_repo") == -1)
      return `Token for [${user._id}][${user.auth.gh.username}] Missing valid 'public_repo' scope`

    if (user.auth.gh.scopes.indexOf("user") == -1)
      return `Token for [${user._id}][${user.auth.gh.username}] Missing valid 'user' scope`

    if (slug && !Shared.posts.validSlug(slug))
      return `Slug[${slug}] not valid`

    if (slug && slug.length > 50)
      return `Slug[${slug}] too long to be used as a repo name`

  },


  exec(post, slug, cb) {
    if (!slug) slug = Shared.posts.defaultSlug(post)
    Post.getByQuery({slug}, { select: 'title slug' }, (ee, fromDb) => {
      Object.assign(post,{slug})
      if (fromDb)
        cb(null, Object.assign(post, { submission: { valid: false,
          info: `Repo name "${slug}" already taken by another post`
        }}))
      else
        Wrappers.GitPublisher.checkOrgRepoAvailabiliy('admin', slug, (e, fromGH) => {
          if (e) return cb(e)
          post.submission = { valid: !fromGH.uavailable }
          if (fromGH.unavailable)
            post.submission.info = fromGH.unavailable
          cb(e, post)
        })
    })

  },


  project: Data.Project.submit


})
