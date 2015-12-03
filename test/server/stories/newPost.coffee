UNIQUIFY_POST = (seedKey) ->
  key = FIXTURE.uniquify('posts', seedKey, 'title slug md')
  Object.assign({key},FIXTURE.posts[key])


ENSURE_AUTHOR = (key, cb) ->
  if key
    DB.ensureDoc 'User', FIXTURE.users[key], -> LOGIN key, cb
  else
    STORY.newUser 'tst1', { ghKey: 'author1', login: true }, cb



module.exports = (key, opts, done) ->
  suffix = timeSeed()

  if !done and opts.constructor is Function
    done = opts
    opts = {}

  {data,author,submit,publish,fork,review} = opts
  d = UNIQUIFY_POST(key)
  ENSURE_AUTHOR author, (s) ->
    post =
      _id:          newId()
      by:           Object.assign(d.by, {userId:s._id,name:s.name})
      title:        d.title
      assetUrl:     d.assetUrl
      tags:         d.tags
      md:           d.md + lotsOfWords('## test #{suffix}')
      created:      new Date()
      updated:      new Date()

    if (submit)
      post.submitted = new Date()
      post.slug      = d.slug || "testit-#{key}-#{suffix}"
      post.github    = repoInfo: {}

    # if (publish)
    # if (review)
    Object.assign(post, opts.data||{})

    DB.Collections.posts.insert post, (e, r) ->
      if (e)
        $log('newPost.e'.red, e)
      done post, s
