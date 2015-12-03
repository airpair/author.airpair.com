
global.newId = ->
  global.ObjectId()


global.timeSeed = ->
  moment().format('X')


global.lotsOfWords = (seed) ->
  words = (seed || "Start")
  words += " stuff " for i in [0..501]
  words


global.STUB_allGitPublishAPIcalls = () ->
  _API = STUB.wrapper('GitPublisher').api
  _API('repos.get').returnParams(FIXTURE.wrappers.gh_repos_get_notfound)
  _API('repos.createFromOrg').returnFix('gh_repos_createFromOrg_47260144')
  _API('repos.createFile').returnFix('gh_repos_createFile_1449060354_readme')
  _API('gitdata.createReference').returnFix('gh_gitdata_createReference_1449060354_editBranch')
  _API('orgs.createTeam').returnFix('gh_orgs_createTeam_1449067207')
  _API('user.editOrganizationMembership').returnFix('gh_orgs_createTeam_1449067207')
  _API('orgs.addTeamMembership').returnFix('gh_orgs_addTeamMembership_1862308_airpairtest1')
