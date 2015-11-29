module.exports = {

  gh_user_bad_creds: [
    Object.assign(Error("Bad credentials"),{documentation_url:"https://developer.github.com/v3",code:401}),
    undefined
  ],

  gh_user_scopes: [
    null,
    {
      meta: {
        'x-ratelimit-limit': '5000',
        'x-ratelimit-remaining': '4992',
        'x-ratelimit-reset': '1448568165',
        'x-oauth-scopes': 'public_repo',
        'last-modified': 'Mon, 16 Nov 2015 04:30:17 GMT',
        etag: '"b53eb55f83f30422bd3f1f71ca5ac32e"',
        status: '200 OK'
      }
    }
  ]

}
