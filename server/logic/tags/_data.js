var views = {
  cached: '_id slug name',
  search: { _id:1, name:1, slug:1, desc:1, short:1,
            score: { $meta: "textScore" } }
}


module.exports = new LogicDataHelper(views,

  () => ({

  }),

  {
    search(term) { return { $text: { $search: '\"'+term+'\"' } } }
  },

  {
    cached:       { select: views.cached },
    sortByName:   { sort:   { name:1 } },
    search:       {
                    select: views.search,
                    limit:  10,
                    sort:   { score: { $meta: "textScore" } },
                  }
  }

)
