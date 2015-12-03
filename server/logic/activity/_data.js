var views = {
  list:     '_id title tags assetUrl by.name stats submitted published htmlHead.ogImage',
  recent:   '_id title assetUrl meta.lastTouch by.name tags submitted published updated stats',
  activity: '_id title assetUrl tags b.name htmlHead slug submitted published updated stats pullRequests',
  pr:       'id url html_url number state title user.login user.avatar_url created_at updated_at closed_at merged_at merge_commit_sha statuses_url'
}


module.exports = new LogicDataHelper(views,

  ({select,assign,map,chain}, TypesUtil) => ({


    recent: r =>
      select.recent(chain(r, '$post.url', 'stats')),


    detail: r =>
      select.activity(chain(r, '$post.url', 'pullRequests', 'stats')),


    pullRequests: p =>
      map(p.pullRequests, pr => select.pr(pr)),


    reviews: p =>
      map(p.reviews, r => ({
        _id:  r._id,
        utc:  TypesUtil.BSONID.toDate(r._id),
        on:   p.title,
        pId:  p._id,
        by:   r.by.name,
        gave: _.find(r.questions,q=>q.key=='rating').answer,
        said: _.find(r.questions,q=>q.key=='feedback').answer
      })),


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
        stats.words = TypesUtil.String.wordcount(r.md)

      // comments: reviews.length + _.flatten(_.pluck(reviews,'replies')||[]).length,
      // openPRs: _.where(post.pullRequests||[],(pr)=>pr.state=='open').length,  // not really correct at all grrr
      // closedPRs: _.where(post.pullRequests||[],(pr)=>pr.state=='closed').length,  // not really correct at all grrr
      // acceptedPRs: _.where(post.pullRequests||[],(pr)=>pr.state=='closed').length,  // not really correct at all grrr
      // shares: 0,            // figure it out later
      return assign(r, { stats })
    }


  }), {


    notBy(_id) {
      return       { 'by.userId': { $ne: _id } }
    }


  },

  {
    recentlyUpdated: { select: views.activity, sort: { 'updated': 1 }, limit: 15 },
  }

)
.shareProjections('activity', 'stats reviews')
