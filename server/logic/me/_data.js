var fields = {
  library:    '_id by.name title tags assetUrl submitted published forkers.userId reviews.by reviews.questions.answer reviews.questions.key'
}

var queries = {
  library: userId => ({ $or: [
      { 'by.userId': userId },
      { 'forkers': { $elemMatch:{userId} } },
      { 'reviews.by': { $elemMatch:{_id:userId} } }
    ]
  })
}


module.exports = new LogicDataHelper(

  fields,

  ({inflate}) => ({

    library: ({userId,mine,newest,scopes}) => ({
      userId,
      scopes:     scopes||false,
      newest,
      drafts:     mine.filter(p => !p.submitted),
      inreview:   mine.filter(p => !p.published && p.submitted),
      published:  mine.filter(p => p.published),
      forked:     mine.filter(p => _.find(p.forkers, f=>_.idsEqual(userId, f.userId) ) ),
      reviewed:   mine.filter(p => _.find(p.reviews, r=>_.idsEqual(userId, r.by._id) ) ),
      // bookmarked: [] // futures
    })

  }),

  queries,

  {
    newest: { select: fields.library, sort: { 'submitted': -1, 'published':-1 }, limit: 6 },
    postList: { select: fields.library, sort: { 'updated': 1 } },
  }

)
.addCacheInflate('tags', ['name','slug','short'])
