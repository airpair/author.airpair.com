creating = ->


  IT "Fails for anonymous user", ->
    title = "Post Anon Create Test #{timeSeed()}"
    POST "/posts", {title}, { authenticated: false, status: 401 }, (e) ->
      DONE()


  IT "Fails without title", ->
    title = "Post Create with no social Test #{timeSeed()}"
    STORY.newUser 'jkx', (s) ->
      POST "/posts", {}, { status: 403 }, (err) ->
        expectContains(err.message, "Title required")
        DONE()


  IT "Create with title", ->
    title = "Post Create with no social Test #{timeSeed()}"
    STORY.newUser 'tbau', (s) ->
      POST "/posts", { title }, (p0) ->
        expectIdsEqual(p0.by.userId, s._id)
        expect(p0.by.name).to.equal(s.name)
        expectContains(p0.by.bio, 'Member of Thiel Foundation Summi')
        expect(p0.by.avatar).to.equal("https://avatars.githubusercontent.com/u/11258947?v=3")
        # expect(p0.created).to.exist
        expect(p0.published).to.be.undefined
        expect(p0.assetUrl).to.be.undefined
        expect(p0.title).to.equal(title)
        expect(p0.meta).to.be.undefined
        expect(p0.md).to.be.undefined
        expect(p0.tags.length).to.equal(0)
        DB.docById 'Post', p0._id, (p0DB) ->
          expect(p0DB.md).to.equal('new')
          expect(p0DB.meta).to.exist
          expect(p0DB.meta.activity.length).to.equal(1)
          DONE()


deleting = ->


  IT "Delete as author", ->
    title = "Post delete as author #{timeSeed()}"
    STORY.newUser 'jkg', (s) ->
      POST "/posts", { title }, (p0) ->
        expect(p0._id).to.exist
        DB.docById 'Post', p0._id, (p0DB) ->
          expect(p0DB).to.exist
          DELETE "/posts/#{p0._id}", (resp) ->
            DB.docById 'Post', p0._id, (pDB) ->
              expect(pDB).to.be.null
              DONE()


  IT "Delete as editor", ->
    title = "Post delete as non-author #{timeSeed()}"
    STORY.newUser 'tst8', (s) ->
      POST "/posts", { title }, (p0) ->
        expect(p0._id).to.exist
        DB.docById 'Post', p0._id, (p0DB) ->
          expect(p0DB).to.exist
          LOGIN 'tiag', (stiag) ->
            expect(s._id.toString()).not.equal(stiag._id.toString())
            DELETE "/posts/#{p0._id}", (resp) ->
              DB.docById 'Post', p0._id, (pDB) ->
                expect(pDB).to.be.null
                DONE()


  IT "Fails as non author (or editor)", ->
    title = "Post delete as non-author or editor #{timeSeed()}"
    STORY.newUser 'jky', (s) ->
      POST "/posts", { title }, (p0) ->
        DB.docById 'Post', p0._id, (p0DB) ->
          expect(p0DB).to.exist
          STORY.newUser 'tst1', (stst1) ->
            expect(s._id.toString()).not.equal(stst1._id.toString())
            DELETE "/posts/#{p0._id}", { status: 403 }, (err) ->
              DB.docById 'Post', p0._id, (pDB) ->
                expect(pDB).to.exist
                DONE()


editing = ->


  IT "Edit and preview as author", ->
    title = "Post edit and preview in draft Test #{timeSeed()}"
    STORY.newUser 'stpv', (s) ->
      POST "/posts", {title}, (p0) ->
        expect(p0.reviews).to.be.undefined
        expect(p0.md).to.be.undefined
        expect(p0.slug).to.be.undefined
        DB.docById 'Post', p0._id, (p0DB) ->
          expectIdsEqual(p0._id, p0DB._id)
          expect(p0DB.md).to.equal('new')
          expect(p0DB.slug).to.be.undefined
          expect(p0DB.url).to.be.undefined
          expect(p0DB.reviews.length).to.equal(0)
          expect(p0DB.forkers.length).to.equal(0)
          expect(p0DB.stats).to.be.undefined
          GET "/posts/markdown/#{p0._id}", (p0Edit) ->
            expect(p0Edit.md.live).to.equal('new')
            expect(p0Edit.md.head).to.be.undefined
            expect(p0Edit.url).to.be.undefined
            expect(p0Edit.stats).to.exist
            expect(p0Edit.stats.words).to.equal(1)
            expect(p0Edit.stats.reviews).to.be.undefined
            updatedMD = '## updated md heading\n\nTest pargraph <sup>this is a reference</sup>'
            PUT "/posts/markdown/#{p0._id}", { md: updatedMD }, (p1Edit) ->
              expect(p1Edit.md.live).to.equal(updatedMD)
              DB.docById 'Post', p0._id, (p1DB) ->
                expect(p1DB.md).to.equal(updatedMD)
                GET "/posts/preview/#{p0._id}", { status: 403 }, (err) ->
                  expectContains(err.message, 'until it has tags')
                  p0.tags = [{"_id" : ObjectId("514825fa2a26ea020000001f")}]
                  PUT "/posts/details/#{p0._id}", p0, (p2) ->
                    expect(p2.body).to.be.undefined
                    GET "/posts/preview/#{p0._id}", (p2preview) ->
                      expectIdsEqual(p2preview._id, p0._id)
                      expect(p2preview.md).to.be.undefined
                      expect(p2preview.references[1]).to.equal('this is a reference')
                      expect(p2preview.body).to.exist
                      expectContains(p2preview.body, '<h2 id=\"updated-md-heading\">updated md heading</h2>')
                      expectContains(p2preview.toc, 'updated md heading</a></li>')
                      DONE()


  SKIP 'Fails preview as non-author', ->
  SKIP 'Fails edit as editor', ->
  SKIP 'Preview as editor', ->


updating = ->


  IT "Fails tags update as non-author (and editor)", ->
    {title, tags} = FIXTURE.clone('posts.exps_deep',{pick:'title tags'})
    LOGIN 'jkg', (sJk) ->
      POST "/posts", { title }, (p0) ->
        expect(p0._id).to.exist
        expect(p0.tags.length).to.equal(0)
        expect(p0.by.userId).to.exist
        STORY.newUser 'tst5', (s) ->
          expect(s._id.toString()).not.equal(p0.by.userId.toString())
          GET "/posts/details/#{p0._id}", { status: 403 }, (e0) ->
            expect(e0.message).to.equal('Post details must be updated by owner')
            p0.tags = tags
            expect(p0.tags.length).to.equal(2)
            PUT "/posts/details/#{p0._id}", p0, { status: 403 }, (e1) ->
              expect(e1.message).to.equal('Post must be updated by owner')
              # STORY.newEditor 'tst8', (s) ->
              # PUT "/posts/details/#{p0._id}", p0, { status: 403 }, (e1) ->
                # expect(e1.message).to.equal('Post[draft] must be updated by owner')
              DONE()


  IT "Update title and tags as author", ->
    {title, tags} = FIXTURE.clone('posts.exps_deep',{pick:'title tags'})
    LOGIN 'jkg', (sJk) ->
      POST "/posts", { title }, (p0) ->
        expect(p0._id).to.exist
        expect(p0.tags.length).to.equal(0)
        expect(p0.by.userId).to.exist
        GET "/posts/details/#{p0._id}", (p1) ->
          expect(p1._id).to.exist
          expect(p1.title).to.equal(title)
          expect(p1.tags.length).to.equal(0)
          expectIdsEqual(p1.by.userId, FIXTURE.users.jkg._id)
          p1.tags = tags
          expect(p1.tags.length).to.equal(2)
          expect(p1.tags[0].name).to.equal('ExpressJS')
          expect(p1.tags[0].slug).to.equal('express')
          expect(p1.tags[0].sort).to.be.undefined
          expect(p1.tags[1].sort).to.be.undefined
          PUT "/posts/details/#{p0._id}", p1, (p2) ->
            expect(p2.title).to.equal(title)
            expect(p2.tags.length).to.equal(2)
            expect(p2.tags[0].name).to.equal('ExpressJS')
            expect(p2.tags[0].slug).to.equal('express')
            expect(p2.tags[0].sort).to.equal(0)
            expect(p2.tags[1].sort).to.equal(1)
            updatedTitle = "updated test title #{timeSeed()}"
            p2.title = updatedTitle
            PUT "/posts/details/#{p0._id}", p2, (p3) ->
              expect(p3.title).to.equal(updatedTitle)
              expect(p2.tags.length).to.equal(2)
              DB.docById 'Post', p0._id, (p3DB) ->
                {activity} = p3DB.meta
                expect(activity.length).to.equal(3)
                expect(activity[0].action).to.equal('create')
                expect(activity[1].action).to.equal('updateDetails')
                expect(activity[2].action).to.equal('updateDetails')
                DONE()


  SKIP "Fails removing all tags"
  SKIP "AssetUrl must be https"



module.exports = ->


  before (done) ->
    DB.ensureDoc 'User', FIXTURE.users.jkg, ->
      DB.ensureDoc 'User', FIXTURE.users.tiag, ->
        DB.ensureDoc 'Post', FIXTURE.posts.higherOrder, ->
          done()


  DESCRIBE("Create", creating)
  DESCRIBE("Delete", deleting)
  DESCRIBE("Edit (Markdown)", editing)
  DESCRIBE("Update (Details)", updating)




