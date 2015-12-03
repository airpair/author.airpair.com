module.exports = (DAL, Data, Shared, Lib) => ({


  validate(user, post) {},


  exec(post, cb) {
    cb(null, post)
  },


  project: Data.Project.actvity


})
