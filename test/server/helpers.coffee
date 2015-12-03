
DATA.timeSeed = ->
  moment().format('X')

DATA.lotsOfWords = (seed) ->
  words = (seed || "Start")
  words += " stuff " for i in [0..501]
  words


EXPECT.library = (r, {drafts,inreview,published,forked,reviewed}) ->
  expect(r.drafts.length).to.equal(drafts||0)
  expect(r.inreview.length).to.equal(inreview||0)
  expect(r.published.length).to.equal(published||0)
  expect(r.forked.length).to.equal(forked||0)
  expect(r.reviewed.length).to.equal(reviewed||0)


STUB.allGitPublisherAPIcalls = () ->
  _API = STUB.wrapper('GitPublisher').api
  _API('repos.get').err(FIXTURE.wrappers.gh_repos_get_notfound)
  _API('repos.createFromOrg').fix('gh_repos_createFromOrg_47260144')
  _API('repos.createFile').fix('gh_repos_createFile_1449060354_readme')
  _API('gitdata.createReference').fix('gh_gitdata_createReference_1449060354_editBranch')
  _API('orgs.createTeam').fix('gh_orgs_createTeam_1449067207')
  _API('user.editOrganizationMembership').fix('gh_user_editOrganizationMembership_JustASimpleTestOrg')
  _API('orgs.addTeamMembership').fix('gh_orgs_addTeamMembership_1862308_airpairtest1')

