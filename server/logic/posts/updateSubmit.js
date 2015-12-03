var handlebars            = require('handlebars')
var marked                = require('marked')


module.exports = (DAL, Data, Shared, {author}) => ({


  validate(user, original, slug)
  {

    if (!author(user, original))
      return `Post[${original._id}] belongs to another user`
    if (original.submitted)
      return `Already submitted [${original.submitted}]`
    if (!slug)
      return `Slug required`
    if (!Shared.posts.validSlug(slug))
      return `Slug ${slug} is not a valid repo name`
    if (slug.length > 50)
      return `Slug ${slug} is too long`
    if (slug.indexOf('--') != -1)
      return `Double '--' in slugs is too ugly for your post's url`

    if (!original.published) {
      var wcount = Shared.TypesUtil.String.wordcount(original.md)
      if (wcount < 400)
        return `Post word count [${wcount}] less than minimum of 500 for peer review`
      //-- Consider checking tags / assetUrl ?
    }

  },


  exec(original, slug, cb) {
    var {_id,md,htmlHead,meta} = original
    var submitted = new Date()
    htmlHead = original.htmlHead || {}
    htmlHead.ogImage = original.assetUrl

    DAL.Template.getByQuery({key:'post-repo-readme'}, (e, tmpl) => {
      var readmeMD = handlebars.compile(tmpl.markdown)(original)

      meta = Shared.touchMeta(meta, 'submit', this.user)
      Wrappers.GitPublisher.setupPostRepo(this.user, slug, _id, md, readmeMD, (e, repoInfo) => {
        if (e) return cb(e)
        var github = { repoInfo }
        DAL.Post.updateSet(_id, {_id,md,htmlHead,meta,slug,htmlHead,submitted,github}, cb)

        // var trackData = { type: 'post-submit', name: post.title, postId: post._id, author: post.by.name, repo: slug }
        // analytics.track(this.user, this.sessionID, 'Save', trackData, {}, ()=>{})
        // if (cache) cache.flush('posts')
        // pairbot.sendPostSubmitted(post)
      })
    })
  },


  project: Data.Project.details


})



