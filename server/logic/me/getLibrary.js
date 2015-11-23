module.exports = (DAL, Data, Shared, Lib) => ({

  validate(user) { },

  exec(cb) {
    cb(null, {published:[],forks:[],forked:[],reviews:[],review:[]})
  },

  project: Data.Project.library

})



