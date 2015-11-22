module.exports = ({ Id, Enum, Reftag, Photo, Meta, Touch, Htmlhead },
  { asSchema, required, trim, lowercase, unique, sparse }) => {


var post = {

  meta:             Meta

}


  return asSchema(post)
}
