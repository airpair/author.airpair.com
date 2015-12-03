module.exports = ({ Id },
  { asSchema, required, unique }) =>


asSchema({

  userId:         { type: Id, ref: 'User', unique, required },

})

