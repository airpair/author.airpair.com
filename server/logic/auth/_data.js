var views = {
  session:     config.middleware.session.authedData
}


module.exports = new LogicDataHelper(

  views,

  ({select}) => ({

    session: r =>
      select.session(r)

  })

)
