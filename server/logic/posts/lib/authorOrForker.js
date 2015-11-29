module.exports = () =>

function(user, post) {
  var isForker = _.find(post.forkers, f => _.idsEqual(user._id, f.userId))
  return isForker || _.idsEqual(user._id, post.by.userId)
}
