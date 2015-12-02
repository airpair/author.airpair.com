basic = ->

  SKIP "Publish as editor without reviews"
#     title = "Can publish without reviews as admin #{timeSeed()}"
#     slug = title.toLowerCase().replace(/\ /g, '-')
#     STORY.newUser 'obie',  (s) ->
#       author = _.extend(s, {bio: "yhoyo", userId: s._id })
#       post = _.extend({},data.posts.submittedWithGitRepo)
#       post = _.extend(post, {title,slug,_id:newId(),by:author})
#       meta = dataHlpr.postMeta(post)
#       db.ensurePost post, ->
#         LOGIN 'edap', ->
#           PUT "/posts/publish/#{post._id}", {by:post.by, meta, tmpl: 'default'}, {}, (p2) ->
#             expect(p2.published)
#             expectIdsEqual(p2.publishedBy._id,data.users['edap']._id)
#             DONE()

  SKIP "Fail as author without reviews", ->
#     title = "Cannot publish without reviews #{timeSeed()}"
#     slug = title.toLowerCase().replace(/\ /g, '-')
#     STORY.newUser 'rapo',  (s) ->
#       author = _.extend({bio: "yhoyo", userId: s._id }, s)
#       post = _.extend({},data.posts.submittedWithGitRepo)
#       post = _.extend(post, {title,slug,_id:newId(),by:author})
#       meta = dataHlpr.postMeta(post)
#       db.ensurePost post, ->
#         PUT "/posts/publish/#{post._id}", {meta}, { status: 403 }, (e1) ->
#           expect(e1.message).to.equal('Must have at least 3 reviews to be published')
#           DONE()

  SKIP "Publis as author with 3 reviews", ->


module.exports = ->

  DESCRIBE("Basic", basic)
