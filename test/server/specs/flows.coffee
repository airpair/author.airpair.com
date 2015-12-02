LIBRARY = (s, expects, cb) ->
  PAGE "/library", {}, (html) ->
    expectContains(html, "window.pageData = { session: {\"_id\":\"#{s._id}\",\"name\":\"#{s.name}\"} }")
    GET "/me/library", (lib) ->
      expectIdsEqual(lib.userId, s._id)
      expectLibrary(lib, expects)
      cb lib


newUsers = ->

  IT 'Finds author via airpair.com and submits their first post', ->
    STUB_allGitPublishAPIcalls()
    STORY.newUser 'tst1', { ghKey: 'author1', login: true }, (s) ->
      LIBRARY s, {}, (lib0) ->
        expect(lib0.recent.length).to.be.at.least(1)
        PAGE "/new", {}, (html1) ->
          expectContains(html1, "window.pageData = { session: {\"_id\":\"#{s._id}\",\"name\":\"#{s.name}\"} }")
          POST "/posts", {title:"My first flow post #{timeSeed}"}, (p0) ->
            PAGE "/editor/#{p0._id}", {}, (html2) ->
              GET "/posts/markdown/#{p0._id}", (p1Edit) ->
                expect(p1Edit.md.live).to.equal('new')
                PUT "/posts/markdown/#{p0._id}", {md:"## First post heading\n\n#{lotsOfWords()}"}, (p2Edit) ->
                  LIBRARY s, {drafts:1}, (lib1) ->
                    PAGE "/post-details/#{p0._id}", {}, (html3) ->
                      GET "/posts/details/#{p0._id}", p0, (p2details) ->
                        p2details.tags = [{ "_id" : "5181d0a966a6f999a465ec0a"}]
                        PUT "/posts/details/#{p0._id}", p2details, (p3) ->
                          # PAGE "/preview/#{p0._id}", {}, (html4) ->
                            # expectContains(html4, "First post headering</h2>")
                          PAGE "/submit/#{p0._id}", {}, (html5) ->
                            GET "/posts/submission/#{p0._id}", p0, (p2details) ->
                              PUT "/posts/submit/#{p0._id}", {slug:"first-post-#{timeSeed()}"}, (p4) ->
                                expect(p4.submitted).to.exist
                                LIBRARY s, {inreview:1}, (lib2) ->
                                  DONE()




module.exports = ->


  before (done) ->
    DB.removeDocs 'User', {'auth.gh.id':FIXTURE.users.tst1.auth.gh.id}, ->
      DB.ensureDoc 'Post', FIXTURE.posts.higherOrder, ->
        done()


  beforeEach ->
    STUB.cb(Wrappers.GitPublisher, 'getScopes', {github:['user','public_repo']})


  DESCRIBE("NEW AUTHOR", newUsers)
  # DESCRIBE("VETERAN AUTHOR", veteranAuthors)
