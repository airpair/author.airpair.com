UNIQUIFY_USER = (seedKey) ->
  key = FIXTURE.uniquify('users', seedKey, 'name email username auth.gh.id auth.gp.id auth.tw.id')
  Object.assign({key},FIXTURE.users[key])


module.exports = (key, opts, done) ->
  if !done and opts.constructor is Function
    done = opts
    opts = {login:true}

  {data,login} = opts
  user = UNIQUIFY_USER(key)

  Object.assign(user, opts.data||{})
  expect(user.initials, "FIXTURE user [#{key}] missing initials").to.exist
  expect(user.auth.gh.login, "FIXTURE [#{key}] user missing gh.login").to.exist
  # $log('user.auth.gh.id', user.auth.gh.id)
  # $log('user.key', user.key)

  DB.Collections.users.insert user, (e, r) ->
    if (e) then $log('DB.insert.user', e)
    if login
      LOGIN user, (session) ->
        done session, user.key
    else
      done user.key

