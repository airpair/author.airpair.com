module.exports = () =>

function(user, post) {
  return _.idsEqual(user._id, post.by.userId)
}
