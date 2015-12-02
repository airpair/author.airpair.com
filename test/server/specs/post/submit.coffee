gpSTUB = (op, fixtureKeySuffix) ->
  fixtureKey = 'gh_'+op.replace('.','_')+'_'+fixtureKeySuffix
  STUB.wrapper('GitPublisher').api(op).returnFix(fixtureKey)


basic = ->

  beforeEach ->
    STUB.cb(Wrappers.GitPublisher, 'getScopes', {github:['user','public_repo']})


  IT "With simple post and valid github token", ->
    STUB.wrapper('GitPublisher').api('repos.get').returnParams(FIXTURE.wrappers.gh_repos_get_notfound)
    gpSTUB('repos.createFromOrg','47260144')
    gpSTUB('repos.createFile','1449060354_readme')
    gpSTUB('gitdata.createReference','1449060354_editBranch')
    gpSTUB('orgs.createTeam','1449067207')
    gpSTUB('orgs.addTeamMembership','1862308_airpairtest1')

    STORY.newPost 'higherOrder', { data: {title: "Higher #{timeSeed()}"} }, (p0, session) ->
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
