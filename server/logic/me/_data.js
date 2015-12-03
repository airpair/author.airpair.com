var views = {
  library:      '_id title meta.lastTouch by md tags assetUrl htmlHead.canonical created submitted published updated forkers.userId reviews._id reviews.by reviews.questions.answer reviews.questions.key',
  mine:         '_id title meta.lastTouch submitted published updated url assetUrl stats',
  contributing: '_id title by.name submitted published updated stats'
}

module.exports = new LogicDataHelper(

  views,

  //-- Projections
  ({chain,select,inflate,map}) => ({


    library: ({userId,scopes,posts}) => {
      var reviews =    []
      var drafts =     []
      var inreview =   []
      var published =  []
      var mine = _.sortBy(posts.filter(p => _.idsEqual(p.by.userId, userId)),r=>-1*r.updated)
      mine.forEach(p => {
        reviews = reviews.concat(chain(p,'$activity.reviews')||[])
        if (!p.updated) p.updated = created
        if (p.published) published.push(p._id)
        else if (p.submitted) inreview.push(p._id)
        else drafts.push(p._id)
      })

      return {
        userId, drafts, inreview, published,
        scopes:   scopes || false,
        reviews:  _.take(_.sortBy(reviews,r=>-1*r.utc), 7),
        mine:     select.mine(chain(mine, '$post.url', '$activity.stats')),
        forked:   select.contributing(posts.filter(p => _.find(p.forkers, f=>_.idsEqual(userId, f.userId) ))),
        reviewed: select.contributing(posts.filter(p => _.find(p.reviews, r=>_.idsEqual(userId, r.by._id) )))
        // bookmarked: [] // futures
      }
    }

  }),

  //-- Queries
  {

    library(_id) {
      return       { $or: [ { 'by.userId': _id },
                            { 'forkers': { $elemMatch: {userId:_id} } },
                            { 'reviews.by': { $elemMatch: {_id} } } ] }
    }

  },

  //-- Query Opts
  {
    postList: { select: views.library, sort: { 'updated': 1 } },
  }

)
.addCacheInflate('tags', ['name','slug','short'])
