var Survey = {}

module.exports = ({ Id, Enum, Touch, Reftag, Note, Htmlhead, Meta },
  { asSchema, required, trim, lowercase, index, unique, sparse }) => {


var Author = {
  userId:       { type: Id, ref: 'User', required, index },
  expertId:     { type: Id, ref: 'Expert' },
  name:         { type: String, required },
  avatar:       { type: String, required },

  //-- legacy to replace
  bio:          { type: String },
  username:     { type: String, lowercase },
  social:       {
      gh: {     username: { type: String } },
      so: {     link: { type: String } },
      bb: {     username: { type: String } },
      in: {     id: { type: String } },
      tw: {     username: { type: String } },
      al: {     username: { type: String } },
      gp: {     link: { type: String } }
  }
}

var StatsSummary = {
  rating:           { type: Number },
  reviews:          { type: Number },
  comments:         { type: Number }, // includes reviews & replies
  forkers:          { type: Number },
  acceptedPRs:      { type: Number },
  closedPRs:        { type: Number },
  openPRs:          { type: Number },
  shares:           { type: Number },
  words:            { type: Number },
}


var Forker = asSchema({
  userId:       { type: Id, ref: 'User', required, index },
  name:         { type: String, trim },
  email:        { type: String, trim, lowercase },
  social:       {
    gh:         { username: { type: String } }
  }
})


var PublishEvent = asSchema({
  touch:        Touch,
  commit:       { type: {} }, // sha hash
})


return asSchema({

  //-- un-nest userId
  by:               Author,

  // detail: {
    title:            { type: String, required, trim },
    slug:             { type: String, unique, sparse, lowercase, trim },
    tags:             [Reftag],
    //-- rename to tileUrl ?
    assetUrl:         { type: String, trim },
    //-- renamed from meta to htmlHeader ?
    htmlHead:         Htmlhead, //-- todo, rename field
  // }

  // content
  md:               { type: String, required },
  tmpl:             { type: String, enum: Enum.POST.TEMPLATE },

  //-- new
  meta:             Meta,

  // history: {
    created:          { type: Date, required, 'default': Date },
    //-- consider removing 'updated' as supersceded by lastTouch
    updated:          { type: Date, required, 'default': Date },
    //
    editHistory:      [Touch],
    submitted:        { type: Date },
    published:        { type: Date }, // first time
    publishedBy: {
      _id:            { type: Id, ref: 'User' },
      name:           { type: String },
    },
    publishedCommit:  { type: {} }, // sha hash or whole commit object
    publishedUpdated: { type: Date }, // lasttime timestamp of update
    publishHistory:   [PublishEvent],

    // legacy
    lastTouch:        {},
  // },


  reviews:          [asSchema(Survey)],
  // reviews:          [], //[asSchema(Survey)],
  forkers:          [Forker],

  // TO review in 0.6.3
  github: {
    repoInfo: {
      authorTeamId:   { type: String },
      authorTeamName: { type: String },
      author:         { type: String },
      url:            { type: String, lowercase },
      // SHA of file ?
    },
    events:           [],
    stats:            [] //Object?
  },

  stats:            StatsSummary,

  prize: {
    comp:       { type: String, enum: Enum.POST.COMP },
    sponsor:    { type: String },
    name:       { type: String },
    tag:        { type: String },
  }

})

}
