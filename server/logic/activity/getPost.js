//-- Temporary solution to problems by some users abusing
//-- Our interface with the github api
cache.pullRequests = function(repo, getterCB, cb)
{
  if (!cache['post_prs']) cache['post_prs'] = {}
  if (cache['post_prs'][repo])
    return cb(null, cache['post_prs'][repo])
  getterCB((e,r)=>{
    if (e) return cb(e)
    cache['post_prs'][repo] = r
    $logIt('modl.cache',"set cache['post_prs']", repo)
    cb(null,r)
  })
}




module.exports = (DAL, Data, Shared, Lib) => ({


  validate(user, post) {
    if (!post.submitted)
      return `Post[${post._id}] not submitted yet. Still for your eye's only`
  },


  exec(post, cb) {
    var done = (e, r) => {
      post.pullRequests = r
      cb(null, post)
    //   Unfortunately this is not right, we need to query the github api again to see if they were merged
    //   var {openPRs,closedPRs,acceptedPRs} = PostsUtil.calcStats(post)
    //   post.stats = _.extend(post.stats||{},{acceptedPRs,openPRs,closedPRs})
    //   POST.updateSet(post._id, {stats}, cb)
    }

    var {org} = config.wrappers.gitPublisher
    cache.pullRequests(post.slug, cb => {
      Wrappers.GitPublisher.getPullRequests('admin', org, post.slug, cb)
    }, done)
  },


  project: Data.Project.activity


})

