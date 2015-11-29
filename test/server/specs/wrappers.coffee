wrapperStuff = ->

  IT 'Fails without token', ->
    {tst1} = FIXTURE.users
    Wrappers.GitPublisher.getScopes tst1, (e,r) ->
      expect(r).to.be.undefined
      expectContains(e.message, "token not present")
      DONE()


  IT 'Fails with invalid token', ->
    STUB.wrapper('GitPublisher').api('user.get').returnFix('gh_user_bad_creds')
    {tst5} = FIXTURE.users
    Wrappers.GitPublisher.getScopes tst5, (e,r) ->
      expect(r).to.be.undefined
      expectContains(e.message, "GitHub token auth failed")
      DONE()


  IT 'Returns public_repo for valid token', ->
    STUB.wrapper('GitPublisher').api('user.get').returnFix('gh_user_scopes')
    gh = tokens: athr: { token: "056c4649780a00acd55666a1892f5f10bbef693b" }
    Wrappers.GitPublisher.getScopes {auth:{gh}}, (e,r) ->
      expect(e).to.be.null
      expect(r.github.length).to.equal(1)
      expect(r.github[0]).to.equal('public_repo')
      DONE()


  SKIP 'Executes as as admin', ->
  SKIP 'Successful retry after one fail', ->
  SKIP 'Stops retrying after cfg.retry.max', ->


teams = ->

  SKIP "Creates a repo team", ->




module.exports = ->


  DESCRIBE "GIT PUBLISHER", ->
    describe 'wrapper stuff', wrapperStuff
    describe 'teams', teams
