var ghError = (data) => {
  var e = Error(data.message)
  e.code = data.code
  if (data.defaultMessage)
     e.defaultMessage = data.defaultMessage
  return e
}


module.exports = {


  gh_user_bad_creds: ghError({
    message:`{\"message\":\"Bad credentials.\",\"documentation_url\":\"https://developer.github.com/v3\"}`,
    code:401
  }),


  gh_user_scopes: {
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4992',
      'x-ratelimit-reset': '1448568165',
      'x-oauth-scopes': 'public_repo, user',
      'last-modified': 'Mon, 16 Nov 2015 04:30:17 GMT',
      etag: '"b53eb55f83f30422bd3f1f71ca5ac32e"',
      status: '200 OK'
    }
  },


  gh_repos_get_notfound: ghError({
    "code":404,
    "message":`{\"message\":\"Not Found.\",\"documentation_url\":\"https://developer.github.com/v3\"}`
  }),


  gh_repos_get_47264557: {
    id: 47264557,
    name: 'steps-1449064887',
    full_name: 'JustASimpleTestOrg/steps-1449064887',
    owner: {
      login: 'JustASimpleTestOrg',
      id: 10776508,
      avatar_url: 'https://avatars.githubusercontent.com/u/10776508?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/JustASimpleTestOrg',
      html_url: 'https://github.com/JustASimpleTestOrg',
      followers_url: 'https://api.github.com/users/JustASimpleTestOrg/followers',
      following_url: 'https://api.github.com/users/JustASimpleTestOrg/following{/other_user}',
      gists_url: 'https://api.github.com/users/JustASimpleTestOrg/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/JustASimpleTestOrg/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/JustASimpleTestOrg/subscriptions',
      organizations_url: 'https://api.github.com/users/JustASimpleTestOrg/orgs',
      repos_url: 'https://api.github.com/users/JustASimpleTestOrg/repos',
      events_url: 'https://api.github.com/users/JustASimpleTestOrg/events{/privacy}',
      received_events_url: 'https://api.github.com/users/JustASimpleTestOrg/received_events',
      type: 'Organization',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/JustASimpleTestOrg/steps-1449064887',
    description: '',
    fork: false,
    url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887',
    forks_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/forks',
    keys_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/teams',
    hooks_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/hooks',
    issue_events_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/issues/events{/number}',
    events_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/events',
    assignees_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/assignees{/user}',
    branches_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/branches{/branch}',
    tags_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/tags',
    blobs_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/languages',
    stargazers_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/stargazers',
    contributors_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/contributors',
    subscribers_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/subscribers',
    subscription_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/subscription',
    commits_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/contents/{+path}',
    compare_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/merges',
    archive_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/downloads',
    issues_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/issues{/number}',
    pulls_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/labels{/name}',
    releases_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449064887/releases{/id}',
    created_at: '2015-12-02T13:59:02Z',
    updated_at: '2015-12-02T13:59:02Z',
    pushed_at: '2015-12-02T13:59:08Z',
    git_url: 'git://github.com/JustASimpleTestOrg/steps-1449064887.git',
    ssh_url: 'git@github.com:JustASimpleTestOrg/steps-1449064887.git',
    clone_url: 'https://github.com/JustASimpleTestOrg/steps-1449064887.git',
    svn_url: 'https://github.com/JustASimpleTestOrg/steps-1449064887',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    open_issues_count: 0,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true },
    organization:
     { login: 'JustASimpleTestOrg',
       id: 10776508,
       avatar_url: 'https://avatars.githubusercontent.com/u/10776508?v=3',
       gravatar_id: '',
       url: 'https://api.github.com/users/JustASimpleTestOrg',
       html_url: 'https://github.com/JustASimpleTestOrg',
       followers_url: 'https://api.github.com/users/JustASimpleTestOrg/followers',
       following_url: 'https://api.github.com/users/JustASimpleTestOrg/following{/other_user}',
       gists_url: 'https://api.github.com/users/JustASimpleTestOrg/gists{/gist_id}',
       starred_url: 'https://api.github.com/users/JustASimpleTestOrg/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/JustASimpleTestOrg/subscriptions',
       organizations_url: 'https://api.github.com/users/JustASimpleTestOrg/orgs',
       repos_url: 'https://api.github.com/users/JustASimpleTestOrg/repos',
       events_url: 'https://api.github.com/users/JustASimpleTestOrg/events{/privacy}',
       received_events_url: 'https://api.github.com/users/JustASimpleTestOrg/received_events',
       type: 'Organization',
       site_admin: false },
    network_count: 0,
    subscribers_count: 3,
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4924',
      'x-ratelimit-reset': '1449065092',
      'x-oauth-scopes': 'admin:org, public_repo',
      'last-modified': 'Wed, 02 Dec 2015 13:59:02 GMT',
      etag: '"7bc92a6e343abefc2c69421a949407eb"',
      status: '200 OK'
    }
  },


  gh_repos_createFromOrg_47260144: {
    id: 47260144,
    name: 'steps-1449060354',
    full_name: 'JustASimpleTestOrg/steps-1449060354',
    owner: {
      login: 'JustASimpleTestOrg',
      id: 10776508,
      avatar_url: 'https://avatars.githubusercontent.com/u/10776508?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/JustASimpleTestOrg',
      html_url: 'https://github.com/JustASimpleTestOrg',
      followers_url: 'https://api.github.com/users/JustASimpleTestOrg/followers',
      following_url: 'https://api.github.com/users/JustASimpleTestOrg/following{/other_user}',
      gists_url: 'https://api.github.com/users/JustASimpleTestOrg/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/JustASimpleTestOrg/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/JustASimpleTestOrg/subscriptions',
      organizations_url: 'https://api.github.com/users/JustASimpleTestOrg/orgs',
      repos_url: 'https://api.github.com/users/JustASimpleTestOrg/repos',
      events_url: 'https://api.github.com/users/JustASimpleTestOrg/events{/privacy}',
      received_events_url: 'https://api.github.com/users/JustASimpleTestOrg/received_events',
      type: 'Organization',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/JustASimpleTestOrg/steps-1449060354',
    description: '',
    fork: false,
    url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354',
    forks_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/forks',
    keys_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/teams',
    hooks_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/hooks',
    issue_events_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/issues/events{/number}',
    events_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/events',
    assignees_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/assignees{/user}',
    branches_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/branches{/branch}',
    tags_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/tags',
    blobs_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/languages',
    stargazers_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/stargazers',
    contributors_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/contributors',
    subscribers_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/subscribers',
    subscription_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/subscription',
    commits_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/contents/{+path}',
    compare_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/merges',
    archive_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/downloads',
    issues_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/issues{/number}',
    pulls_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/labels{/name}',
    releases_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/releases{/id}',
    created_at: '2015-12-02T12:43:29Z',
    updated_at: '2015-12-02T12:43:29Z',
    pushed_at: '2015-12-02T12:43:29Z',
    git_url: 'git://github.com/JustASimpleTestOrg/steps-1449060354.git',
    ssh_url: 'git@github.com:JustASimpleTestOrg/steps-1449060354.git',
    clone_url: 'https://github.com/JustASimpleTestOrg/steps-1449060354.git',
    svn_url: 'https://github.com/JustASimpleTestOrg/steps-1449060354',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    open_issues_count: 0,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    permissions: { admin: true, push: true, pull: true },
    organization: {
      login: 'JustASimpleTestOrg',
      id: 10776508,
      avatar_url: 'https://avatars.githubusercontent.com/u/10776508?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/JustASimpleTestOrg',
      html_url: 'https://github.com/JustASimpleTestOrg',
      followers_url: 'https://api.github.com/users/JustASimpleTestOrg/followers',
      following_url: 'https://api.github.com/users/JustASimpleTestOrg/following{/other_user}',
      gists_url: 'https://api.github.com/users/JustASimpleTestOrg/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/JustASimpleTestOrg/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/JustASimpleTestOrg/subscriptions',
      organizations_url: 'https://api.github.com/users/JustASimpleTestOrg/orgs',
      repos_url: 'https://api.github.com/users/JustASimpleTestOrg/repos',
      events_url: 'https://api.github.com/users/JustASimpleTestOrg/events{/privacy}',
      received_events_url: 'https://api.github.com/users/JustASimpleTestOrg/received_events',
      type: 'Organization',
      site_admin: false
    },
    network_count: 0,
    subscribers_count: 2,
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4961',
      'x-ratelimit-reset': '1449060381',
      'x-oauth-scopes': 'admin:org, public_repo',
      location: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354',
      etag: '"2879cf52dbe304ddbd032522b9bf697d"',
      status: '201 Created'
     }
  },


  gh_repos_createFile_1449060354_readme: {
    content: {
      name: 'README.md',
      path: 'README.md',
      sha: '3c92e2f7a88fd7fe99f35e770b78b441d45d1df6',
      size: 27,
      url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/contents/README.md?ref=master',
      html_url: 'https://github.com/JustASimpleTestOrg/steps-1449060354/blob/master/README.md',
      git_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/blobs/3c92e2f7a88fd7fe99f35e770b78b441d45d1df6',
      download_url: 'https://raw.githubusercontent.com/JustASimpleTestOrg/steps-1449060354/master/README.md',
      type: 'file',
      _links: {
        self: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/contents/README.md?ref=master',
        git: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/blobs/3c92e2f7a88fd7fe99f35e770b78b441d45d1df6',
        html: 'https://github.com/JustASimpleTestOrg/steps-1449060354/blob/master/README.md'
      }
    },
    commit: {
      sha: '1081baa0c1b6d0635a0cdbb249eb4aa9f85e29b4',
      url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/commits/1081baa0c1b6d0635a0cdbb249eb4aa9f85e29b4',
      html_url: 'https://github.com/JustASimpleTestOrg/steps-1449060354/commit/1081baa0c1b6d0635a0cdbb249eb4aa9f85e29b4',
      author: {
        name: 'Jonny Yahoo',
        email: 'jkresner@yahoo.com.au',
        date: '2015-12-02T12:43:30Z'
      },
      committer: {
        name: 'Jonny Yahoo',
        email: 'jkresner@yahoo.com.au',
        date: '2015-12-02T12:43:30Z'
      },
      tree: {
        sha: '7b742fd5af4c6a33589ecc2220553056dbfb3e14',
        url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/trees/7b742fd5af4c6a33589ecc2220553056dbfb3e14' },
        message: 'Add README.md',
        parents: []
      },
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4960',
      'x-ratelimit-reset': '1449060381',
      'x-oauth-scopes': 'admin:org, public_repo',
      etag: '"c2fe9d5b232d88722a24aeef43490127"',
      status: '201 Created'
    }
  },


  gh_gitdata_createReference_1449060354_editBranch: {
    ref: 'refs/heads/edit',
    url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/refs/heads/edit',
    object: {
      sha: '1081baa0c1b6d0635a0cdbb249eb4aa9f85e29b4',
      type: 'commit',
      url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/commits/1081baa0c1b6d0635a0cdbb249eb4aa9f85e29b4' },
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4959',
      'x-ratelimit-reset': '1449060381',
      'x-oauth-scopes': 'admin:org, public_repo',
      location: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/refs/heads/edit',
      etag: '"c411072d8db3fca2d30024ad2bb719d0"',
      status: '201 Created'
    }
  },


  gh_orgs_createTeam_1449067207: {
    name: 'steps-1449067207-48adad06-author',
    id: 1862364,
    slug: 'steps-1449067207-48adad06-author',
    description: null,
    permission: 'push',
    privacy: 'secret',
    url: 'https://api.github.com/teams/1862364',
    members_url: 'https://api.github.com/teams/1862364/members{/member}',
    repositories_url: 'https://api.github.com/teams/1862364/repos',
    members_count: 0,
    repos_count: 1,
    organization:
     { login: 'JustASimpleTestOrg',
       id: 10776508,
       url: 'https://api.github.com/orgs/JustASimpleTestOrg',
       repos_url: 'https://api.github.com/orgs/JustASimpleTestOrg/repos',
       events_url: 'https://api.github.com/orgs/JustASimpleTestOrg/events',
       members_url: 'https://api.github.com/orgs/JustASimpleTestOrg/members{/member}',
       public_members_url: 'https://api.github.com/orgs/JustASimpleTestOrg/public_members{/member}',
       avatar_url: 'https://avatars.githubusercontent.com/u/10776508?v=3',
       description: null,
       public_repos: 3377,
       public_gists: 0,
       followers: 0,
       following: 0,
       html_url: 'https://github.com/JustASimpleTestOrg',
       created_at: '2015-01-30T17:29:50Z',
       updated_at: '2015-04-22T05:59:44Z',
       type: 'Organization' },
    meta:
     { 'x-ratelimit-limit': '5000',
       'x-ratelimit-remaining': '4984',
       'x-ratelimit-reset': '1449069307',
       'x-oauth-scopes': 'admin:org, public_repo',
       location: 'https://api.github.com/teams/1862364',
       etag: '"9601562afdb09c7a57df7fd378606513"',
       status: '201 Created' }
  },



  gh_org_addTeamMembership_1862308_airpairtest1: {
    state: 'active',
    role: 'member',
    url: 'https://api.github.com/teams/1862308/memberships/airpairtest1',
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4950',
      'x-ratelimit-reset': '1449065092',
      'x-oauth-scopes': 'admin:org, public_repo',
      etag: '"2a7444ed81c68ff06ac6b718ad0298a7"',
      status: '200 OK'
    }
  },


  gh_user_editOrganizationMembership_JustASimpleTestOrg: {
    url: 'https://api.github.com/orgs/JustASimpleTestOrg/memberships/pairy',
    state: 'active',
    role: 'member',
    organization_url: 'https://api.github.com/orgs/JustASimpleTestOrg',
    organization: {
      login: 'JustASimpleTestOrg',
      id: 10776508,
      url: 'https://api.github.com/orgs/JustASimpleTestOrg',
      repos_url: 'https://api.github.com/orgs/JustASimpleTestOrg/repos',
      events_url: 'https://api.github.com/orgs/JustASimpleTestOrg/events',
      members_url: 'https://api.github.com/orgs/JustASimpleTestOrg/members{/member}',
      public_members_url: 'https://api.github.com/orgs/JustASimpleTestOrg/public_members{/member}',
      avatar_url: 'https://avatars.githubusercontent.com/u/10776508?v=3',
      description: null },
    user: {
      login: 'pairy',
      id: 10833613,
      avatar_url: 'https://avatars.githubusercontent.com/u/10833613?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/pairy',
      html_url: 'https://github.com/pairy',
      followers_url: 'https://api.github.com/users/pairy/followers',
      following_url: 'https://api.github.com/users/pairy/following{/other_user}',
      gists_url: 'https://api.github.com/users/pairy/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/pairy/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/pairy/subscriptions',
      organizations_url: 'https://api.github.com/users/pairy/orgs',
      repos_url: 'https://api.github.com/users/pairy/repos',
      events_url: 'https://api.github.com/users/pairy/events{/privacy}',
      received_events_url: 'https://api.github.com/users/pairy/received_events',
      type: 'User',
      site_admin: false
    },
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4993',
      'x-ratelimit-reset': '1449061078',
      'x-oauth-scopes': 'public_repo, user',
      etag: '"787068869415eafcb8bb623b754c300a"',
      status: '200 OK'
    }
  },


  gh_repos_createFile_1449060354_postMD: {
    content: {
      name: 'post.md',
      path: 'post.md',
      sha: '5efac0c3693469a60b89b4ae93ee7098554ba244',
      size: 27,
      url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/contents/post.md?ref=edit',
      html_url: 'https://github.com/JustASimpleTestOrg/steps-1449060354/blob/edit/post.md',
      git_url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/blobs/5efac0c3693469a60b89b4ae93ee7098554ba244',
      download_url: 'https://raw.githubusercontent.com/JustASimpleTestOrg/steps-1449060354/edit/post.md',
      type: 'file',
      _links: {
        self: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/contents/post.md?ref=edit',
        git: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/blobs/5efac0c3693469a60b89b4ae93ee7098554ba244',
        html: 'https://github.com/JustASimpleTestOrg/steps-1449060354/blob/edit/post.md'
      }
    },
    commit: {
      sha: 'e36428ab6b429e46671973d9a55074e4a5fe7531',
      url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/commits/e36428ab6b429e46671973d9a55074e4a5fe7531',
      html_url: 'https://github.com/JustASimpleTestOrg/steps-1449060354/commit/e36428ab6b429e46671973d9a55074e4a5fe7531',
      author:
      { name: 'Air PairOne',
        email: 'airpairtest1@gmail.com',
        date: '2015-12-02T13:04:57Z' },
     committer:
      { name: 'Air PairOne',
        email: 'airpairtest1@gmail.com',
        date: '2015-12-02T13:04:57Z' },
      tree: {
        sha: 'a1fe182228dbee08c74ac74bc988b24084263ad8',
        url: 'https://api.github.com/repos/JustASimpleTestOrg/steps-1449060354/git/trees/a1fe182228dbee08c74ac74bc988b24084263ad8'
      },
      message: 'Initial Commit',
      parents: []
    },
    meta: {
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4992',
      'x-ratelimit-reset': '1449061078',
      'x-oauth-scopes': 'admin:org, public_repo',
      etag: '"4745981751be55d34d273fb820027f6f"',
      status: '201 Created'
    }
  },



  gh_err_bad_request: ghError({
    "code":"400",
    "status":"Bad Request",
    "message":"Empty value for parameter 'user': undefined"
  }),


  gh_err_membership_no_access: ghError({
    "code":403,
    "message":`{\"message\":\"You do not have access to this organization membership.\",\"documentation_url\":\"https://developer.github.com/v3\"}`
  })

}
