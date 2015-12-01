'use strict';
var marked              = require('marked')
var toc                 = require('./lib/toc')()
var PostsUtil           = require('../../../shared/posts')

var views = {
  edit:     '_id title tags assetUrl by.userId url submitted published updated md stats todo', //github.repoInfo slug created published submitted tags assetUrl repo stats synced
  details:  '_id title tags assetUrl by', // created published submitted
  preview:  '_id title tags assetUrl by body references toc', // created published submitted
  review:   '_id title tags assetUrl by body references toc review stats', // created published submitted
  list:     '_id title tags assetUrl by.name stats'
}

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
      assign(r, { url: _.get(r,'htmlHead.canonical')||`/posts/review/${r._id}` }),

    details: r =>
      select.details(chain(r, 'url', inflate.tags)),

    todo: r =>
      Object.assign(r, { todo: { next: PostsUtil.todo(r)} }),

    edit: r =>
      select.edit(assign(chain(r,'url','stats','todo'), { md: {live:r.md,head:r.headMD} })),

    preview: r => {
      var {markdown,references} = PostsUtil.extractReferences(r.headMD)

      return select.preview(chain(assign(r, {
        references,
        body: marked(markdown),
        toc: marked(toc(markdown))
      })), 'url', inflate.tags)
    },

    review: r => {
      var {markdown,references} = PostsUtil.extractReferences(r.md)

      return select.review(chain(assign(r, {
        references,
        body: marked(markdown),
        toc: marked(toc(markdown))
      })), 'url', 'stats', inflate.tags)
    },

    stats: r => {
      var stats = {}
      if (r.submitted) {
        if (r.forkers)
          stats.forkers = r.forkers.length
        if (r.reviews) {
          stats.reviews = r.reviews.length
          stats.stars = 0
          for (var {questions} of r.reviews)
            stats.stars += parseInt(_.find(questions,q=>q.key=='rating').answer)
          stats.rating = Math.round(stats.stars / stats.reviews * 100) / 100
        }
      }

      if (r.md)
        stats.words = PostsUtil.wordcount(r.md)

      // comments: reviews.length + _.flatten(_.pluck(reviews,'replies')||[]).length,
      // openPRs: _.where(post.pullRequests||[],(pr)=>pr.state=='open').length,  // not really correct at all grrr
      // closedPRs: _.where(post.pullRequests||[],(pr)=>pr.state=='closed').length,  // not really correct at all grrr
      // acceptedPRs: _.where(post.pullRequests||[],(pr)=>pr.state=='closed').length,  // not really correct at all grrr
      // shares: 0,            // figure it out later
      return Object.assign(r, { stats })
    }

  })

)
.addCacheInflate('tags', ['name','slug','short','desc'])
.shareProjections('posts', 'url stats')
