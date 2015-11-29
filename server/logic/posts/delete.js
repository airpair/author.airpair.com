module.exports = (DAL, Data, Shared, {author,authorOrEditor}) => ({


  validate(user, original)
  {
    if (!authorOrEditor(user,original))
      return `Post[${original._id}] must be deleted by owner`

    if (author(user,original) && original.submitted)
      return `Submitted Post[${original._id}] must be deleted by an editor`
  },


  exec(original, cb) {
    DAL.Post.delete(original, cb)
  }


})



