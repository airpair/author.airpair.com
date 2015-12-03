basic = ->

  beforeEach ->
    STUB.cb(Wrappers.GitPublisher, 'getScopes', {github:['user','public_repo']})


  IT "With simple post and valid github token", ->
    STUB_allGitPublishAPIcalls()
    STORY.newPost 'higherOrder', { author: 'tst8', data: {title: "Higher #{timeSeed()}"} }, (p0, session) ->
      GET "/posts/submission/#{p0._id}", (pSubmission) ->
        expectIdsEqual(pSubmission._id, p0._id)
        expect(pSubmission.slug).to.exist
        expect(pSubmission.submission.valid).to.be.true
        PUT "/posts/submit/#{p0._id}", pSubmission, (p1) ->
          expect(p1.submitted).to.exist
          expect(p1.slug).to.equal(pSubmission.slug)
          DONE()


fails = ->

  SKIP "With expired gh token", ->
  SKIP "When 'user' | 'public_repo' scope missing", ->
  SKIP "After already submitted", ->
  SKIP "When post submission requirements not met", ->
    # wordcount
    # assetUrl
    # tags

module.exports = ->

  DESCRIBE("Basic", basic)
  DESCRIBE("Fails gracefully", fails)
