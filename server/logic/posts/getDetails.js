module.exports = (DAL, Data, Shared, {authorOrEditor}) => ({

  validate(user, post) {
    if (!authorOrEditor(user,post))
      return 'Post details must be updated by owner'
  },

  exec(post, cb) {
    cb(null, post)
  },

  project: Data.Project.details

})



