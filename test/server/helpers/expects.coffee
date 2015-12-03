global.expectLibrary = (r, {drafts,inreview,published,forked,reviewed}) ->
  expect(r.drafts.length).to.equal(drafts||0)
  expect(r.inreview.length).to.equal(inreview||0)
  expect(r.published.length).to.equal(published||0)
  expect(r.forked.length).to.equal(forked||0)
  expect(r.reviewed.length).to.equal(reviewed||0)
