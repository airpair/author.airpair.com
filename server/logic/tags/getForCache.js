module.exports = ({Tag}, {Project, Opts}, Shared) => ({

  exec(cb) {
    Tag.getManyByQuery({}, Opts.cached, cb)
  }

})

