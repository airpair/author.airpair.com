var fields = {
  session:     config.middleware.session.authedData
}


module.exports = new LogicDataHelper(fields,

  ({select}) => ({

    session: r => select(r, fields.session.split(' '))

  })

)
