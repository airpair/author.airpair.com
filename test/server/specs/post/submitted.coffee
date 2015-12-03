deleting = ->

  SKIP "Fail as author", ->
  SKIP "Delete as editor", ->



editing = ->


  SKIP "Edit and preview HEAD as author", ->
#     author = data.users.submPostAuthor
#     db.ensureDoc 'User', author, ->
#       db.ensurePost data.posts.submittedWithGitRepo, ->
#         LOGIN 'submPostAuthor', (s) ->
#           GET "/posts/me", {}, (posts) ->
#             myposts = _.where(posts,(p)=>_.idsEqual(p.by.userId,s._id))
#             expect(myposts.length).to.equal(1)
#             _id = myposts[0]._id
#             getForReviewFn = $callSvc(PostsSvc.getByIdForReview,{user:author})
#             getForPreviewFn = $callSvc(PostsSvc.getByIdForPreview,{user:author})
#             getForReviewFn _id, (e, pReview) ->
#               reviewMD = pReview.md
#               expect(reviewMD).to.equal(data.posts.submittedWithGitRepo.md)
#               GET "/posts/#{_id}/edit", {}, (pEdit) ->
#                 md = "1"+pEdit.md
#                 PUT "/posts/#{_id}/md", { md, commitMessage: timeSeed() }, {}, (p2) ->
#                   expect(p2.md).to.equal(md)
#                   getForPreviewFn _id, (eee, pPreview2) ->
#                     expect(pPreview2.md).to.equal(md)
#                     getForReviewFn _id, (ee, pReview2) ->
#                       expect(pReview2.md).to.equal(reviewMD)
#                       DONE()


  SKIP "Sync HEAD as author", ->
#     title = "Submit success with connected github #{timeSeed()}"
#     STORY.newUserWithGithubProfile 'robot6', null, (s) ->
#       d = { title, by:_.extend({bio: 'yo yyoy o'},s), md: dataHlpr.lotsOfWords('Sync from with github') }
#       SETUP.createSubmitReadyPost s.userKey, d, (post) ->
#         _id = post._id
#         slug = title.toLowerCase().replace(/\ /g, '-')
#         PUT "/posts/submit/#{_id}", {slug}, {}, (p1) ->
#           liveMD = p1.md
#           md = "2"+liveMD
#           PUT "/posts/#{_id}/md", { md, commitMessage: timeSeed() }, {}, (p2) ->
#             getForReviewFn = $callSvc(PostsSvc.getByIdForReview,{user:data.users[s.userKey]})
#             getForReviewFn _id, (e, pReview) ->
#               expect(pReview.md).to.equal(liveMD)
#               expect(pReview.md).to.not.equal(md)
#               PUT "/posts/propagate-head/#{_id}", {}, {}, (p3) ->
#                 expect(p3.md).to.equal(md)
#                 getForReviewFn _id, (ee, pReview2) ->
#                   expect(pReview2.md).to.equal(md)
#                   DONE()




module.exports = ->

  DESCRIBE("Delete", deleting)
  DESCRIBE("Edit (Markdown)", editing)
  DESCRIBE.skip("Update (Details)", ->)

