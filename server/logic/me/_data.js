var fields = {
}

var inflateTags = raw =>
  Object.assign(raw, !raw.tags ? {} : { tags:
  raw.tags.map(t => Object.assign({sort:t.sort},cache.tags[t._id])) })

var Project = {
  fields,
  inflateTags,
  library: raw => {
    return raw
  }
}


var Query = {

}


module.exports = {Project,Query}
