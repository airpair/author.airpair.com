module.exports = (DAL, Data, Shared, {authorOrEditor}) => ({


  validate(user, original, update)
  {
    if (!authorOrEditor(user,original))
      return 'Post must be updated by owner'

    if (original.tags.length > 0 && !update.tags || update.tags.length == 0)
      return `Post must have at least 1 tag`

    if (original.published && !isEditor)
      return `Must be editor to update post once published`

    if (!_.idsEqual(original.by.userId, update.by.userId))
      return `Cannot change author via update`
    if (update.slug)
      return `Cannot update slug`
    if (update.reviews)
      return `Cannot update reviews`
    if (update.AssetUrl &&
        update.assetUrl.indexOf('http://youtu.be/') != 0 &&
        update.assetUrl.indexOf('https://') != 0)

      return `AssetUrl must be fully qualified https:// url`
  },


  exec(original, update, cb) {
    var {tags,title,assetUrl} = update

    var tagSort = 0
    for (var tag of tags) {
      tag.sort = tagSort++
    }

    var meta = Shared.touchMeta(original.meta, 'updateDetails', this.user)

    // if (original.assetUrl != ups.assetUrl && (original.submitted || original.published))
    //   ups.meta = _.extend(original.meta, _.extend(ups.meta||{},{ogImage:ups.assetUrl}))

    DAL.Post.updateSet(original._id, {tags,title,assetUrl,meta}, cb)
  },


  project: Data.Project.details

})



