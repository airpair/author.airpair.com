module.exports = () =>

function(user, post) {
  var isEditor = _.contains(user.roles, 'editor')
  return isEditor || _.idsEqual(user._id, post.by.userId)
}
