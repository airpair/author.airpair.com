UNIQUIFY_USER = (seedKey) ->
  key = FIXTURE.uniquify('users', seedKey, 'name email username auth.gh.id auth.gp.id auth.tw.id')
  Object.assign({key},FIXTURE.users[key])


CREATOR = (login, done) -> (user) ->
  DB.Collections.users.insert user, (e, r) ->
    if (e) then $log('DB.insert.user', e)
    if login
      LOGIN user, (session) ->
        done session, user.key
    else
      done user.key


ENSURE_VALID_GH = (user, ghKey, cb) ->
  {token,username} = FIXTURE.githubusers[ghKey]
  DB.removeDocs 'User', {'auth.gh.login':username}, ->
    user.auth.gh.login = username
    tokens = {}
    tokens[global.config.auth.appKey] = { token }
    user.auth.gh.tokens = Object.assign(user.auth.gh.tokens||{},tokens)
    cb(user)


module.exports = (key, opts, done) ->
  if !done and opts.constructor is Function
    done = opts
    opts = {login:true}

  {data,login,ghKey} = opts

  user = UNIQUIFY_USER(key)
  Object.assign(user, opts.data||{})
  expect(user.initials, "FIXTURE user [#{key}] missing initials").to.exist
  expect(user.auth.gh.login, "FIXTURE [#{key}] user missing gh.login").to.exist

  CREATE_USER = CREATOR(login, done)
  if (ghKey)
    ENSURE_VALID_GH user, ghKey, CREATE_USER
  else
    CREATE_USER user

