
anon = ->


  IT '/ OK', ->
    PAGE '/', { authenticated: false }, (html) ->
      EXPECT.contains(html,'Login')
      DONE()

  IT '/library 302 to /?returnTo=/library', ->
    PAGE '/library', { authenticated: false, status: 302 }, (text) ->
      EXPECT.contains(text,'Redirecting to /?returnTo=/library')
      DONE()


authd = ->


  IT '/ 302 to /library', ->
    LOGIN {key:'tst1'}, (session) ->
      EXPECT.equalIdAttrs(session, FIXTURE.users.tst1)
      expect(session.name).to.equal('Air PairOne')
      PAGE '/', { status: 302 }, (text) ->
        EXPECT.contains(text,'Redirecting to /library')
        DONE()


  IT '/library OK', ->
    LOGIN {key:'tst1'}, (session) ->
      PAGE '/library', { status: 200 }, (text) ->
        EXPECT.contains(text,'ng-view')
        EXPECT.contains(text,'window.pageData = { session: {"_id":"5649cf5beb1811be02f0ec39","name":"Air PairOne"} }')
        DONE()


  SKIP '/library does not contain any sensitive data', ->
    # LOGIN 'jkap', (jk) ->
    #   GET "/posts/me", {}, (myposts) ->
    #     for p in myposts
    #       expect(p.title).to.exist
    #       expect(p.publishHistory).to.be.undefined
    #       expect(p.editHistory).to.be.undefined
    #       if (p.github)
    #         expect(p.github.stats).to.be.undefined
    #         expect(p.github.events).to.be.undefined
    #       for f in p.forkers
    #         expect(f.email).to.be.undefined
    #       for r in p.reviews
    #         expect(r.by.email).to.be.undefined
    #         for v in r.votes
    #           expect(v.by.email).to.be.undefined
    #         for rp in r.replies
    #           expect(rp.by.email).to.be.undefined
    #     DONE()

  launch = ->

    IT 'Renamed .meta to htmlHead', ->
      # db.posts.update({meta:{$exists:1}},{ $rename: {meta:'htmlHead'} },{multi:true})
      expect(false).to.be.true


module.exports = ->

  before (done) ->
    DB.ensureDoc 'User', FIXTURE.users.tst1, ->
      done()

  DESCRIBE("ANONYMOUS", anon)
  DESCRIBE("AUTHENTICATED", authd)
