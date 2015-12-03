module.exports = ({ Enum },
  { asSchema, required, trim, lowercase, unique }) =>


asSchema({

  key:          { type: String, required, trim, lowercase, unique },
  type:         { type: String, required, trim, lowercase }, //, enum: Enum.TEMPLATE.TYPE
  markdown:     { type: String, required },
  subject:      { type: String },
  description:  { type: String },

})
