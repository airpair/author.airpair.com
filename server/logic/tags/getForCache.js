module.exports = ({Tag}, {Project}, Shared) => ({

  exec(cb) {
    Tag.getManyByQuery({}, {select:Project.fields.cached}, cb)
  }

})

