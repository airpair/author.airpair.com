module.exports = ->

  DESCRIBE("POST DRAFT", require('./post/draft'))
  DESCRIBE("SUBMIT", require('./post/submit'))
  DESCRIBE.skip("POST SUBMITTED", require('./post/submitted'))
  DESCRIBE.skip("PUBLISH", require('./post/publish'))
  DESCRIBE.skip("POST PUBLISHED", require('./post/published'))
