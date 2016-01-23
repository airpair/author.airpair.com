var views = {
  edit:         '_id title tags assetUrl by.userId submitted published updated md slug stats todo repo', //github.repoInfo  created published submitted tags assetUrl  synced
  details:      '_id title tags assetUrl by slug submitted published ',
  submit:       '_id title tags by slug submission',
  previewable:  '_id title tags assetUrl by body references toc', // created published submitted
  reviewable:   '_id title tags assetUrl by body references toc review stats', // created published submitted
  viewable:     ''
}


var toc                 = require('./lib/toc')()
var PostsUtil           = require('../../../shared/posts')


module.exports = new LogicDataHelper(views,

  ({select,assign,inflate,chain}) => ({

    author: (user, expert) => {
      var p = select(user,'name avatar bio')
      p.userId = user._id
      if (_.get(user,'auth.gh.gravatar_id'))
        p.avatar = `//0.gravatar.com/avatar/${user.auth.gh.gravatar_id}`
      else
        p.avatar = user.auth.gh.avatar_url
      if (expert)
        p.expertId = expert._id
      return p
    },

    url: r =>
      assign(r, { url: PostsUtil.url(r) }),

    details: r =>
      select.details(chain(r, 'url', inflate.tags)),

    activity: r =>
      select.activity(chain(r, 'url', '$activity.stats')),

    todo: r =>
      assign(r, { todo: { next: PostsUtil.todo(r)} }),

    edit: r =>
      select.edit(assign(chain(r,'$activity.stats','todo'), { md: {live:r.md,head:r.headMD} })),

    submit: r =>
      select.submit(assign(chain(r, inflate.tags), { slug: r.slug || PostsUtil.defaultSlug(r) })),

    previewable: r => {
      var {markdown,references} = PostsUtil.extractReferences(r.headMD)

      return select.previewable(chain(assign(r, {
        references,
        body: marked(markdown),
        toc: marked(toc(markdown))
      })), 'url', inflate.tags)
    },

    reviewable: r => {
      var {markdown,references} = PostsUtil.extractReferences(r.md)

      return select.review(chain(assign(r, {
        references,
        body: marked(markdown),
        toc: marked(toc(markdown))
      })), 'url', '$activity.stats', inflate.tags)
    },

    viewable: r =>
      r

  })

)
.addCacheInflate('tags', ['name','slug','short','desc'])
.shareProjections('post', 'url')
