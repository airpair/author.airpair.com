deleting = ->

  SKIP "Fail as author", ->
  SKIP "Fail as editor", ->



editing = ->


  SKIP "Edit and preview HEAD as author", ->
  SKIP "Fail Sync HEAD as author", ->
  SKIP "Sync HEAD as editor", ->
#     author = data.users.syncPostAuthor
#     db.ensureDoc 'User', author, ->
#       db.ensurePost data.posts.toSync, ->
#         LOGIN 'syncPostAuthor',  (s) ->
#           _id = data.posts.toSync._id
#           GET "/posts/#{_id}/edit", {}, (pEdit) ->
#             md = "3 "+ data.posts.toSync.md
#             PUT "/posts/#{_id}/md", { md, commitMessage: timeSeed() }, {}, (p2) ->
#               expect(p2.md).to.equal(md)
#               getForPublishedFn = $callSvc(PostsSvc.getBySlugForPublishedView,{user:data.users.syncPostAuthor})
#               LOGIN 'edap', ->
#                 meta = dataHlpr.postMeta(p2)
#                 PUT "/posts/publish/#{_id}", {by:p2.by, meta, tmpl: 'default'}, {}, (p3) ->
#                   getForPublishedFn p2.slug, (e, pPub1) ->
#                     expect(pPub1.md).to.equal(data.posts.toSync.md)
#                     PUT "/posts/propagate-head/#{_id}", {}, {}, (p4) ->
#                       expect(p4.md).to.equal(md)
#                       getForPublishedFn p2.slug, (ee, pPub2) ->
#                         expect(pPub2.md).to.equal(md)
#                         DONE()


module.exports = ->

  DESCRIBE("Delete", deleting)
  DESCRIBE("Edit (Markdown)", editing)
  # DESCRIBE.skip("Update (Details)", ->)
