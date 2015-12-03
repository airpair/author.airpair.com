module.exports = ({ Id },
  { asSchema, required, trim, lowercase, unique, sparse }) => {


var TagSchema = asSchema({

  // E.g. Ruby on Rails
  name:     { type: String, required, trim },

  // E.g. Rails
  short:    { type: String, required, trim },

  // E.g. ruby-on-rails
  slug:     { type: String, required, trim, lowercase, unique, sparse },

  desc:     { type: String },

  // E.g "RoR,Rub,Ruby,Rai" comma separated strings to assist search
  tokens:   { type: String },

  soId:     { type: String, trim, lowercase, unique, sparse },

})

var indexFields = { tokens: 'text', name: 'text', short: 'text', desc: 'text' }
var weights = { tokens: 2000, name: 1000, short: 400, desc: 10 }
TagSchema.index(indexFields, { name: 'TagTextIndex', weights })



  return TagSchema
}
