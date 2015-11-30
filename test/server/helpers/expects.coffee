global.expectLibrary = (lib, {drafts,inreview,published,forked,reviewed}) ->
  expect(lib.drafts.length).to.equal(drafts||0)
  expect(lib.inreview.length).to.equal(inreview||0)
  expect(lib.published.length).to.equal(published||0)
  expect(lib.forked.length).to.equal(forked||0)
  expect(lib.reviewed.length).to.equal(reviewed||0)
