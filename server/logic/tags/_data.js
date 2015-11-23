var fields = {
  cached: '_id slug name'
}

var Project = {
  fields
}


var Query = {
  Opts: {
    sortByName: {sort:{name:1}},
    search: {
      select: {
        _id: 1,
        name: 1,
        slug: 1,
        desc: 1,
        short: 1,
        score: { $meta: "textScore" }
      },
      sort: { score: { $meta: "textScore" } },
      limit: 10
    }
  }
}



module.exports = {Project,Query}
