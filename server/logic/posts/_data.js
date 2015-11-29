'use strict';
var marked              = require('marked')
var toc                 = require('./lib/toc')()
var PostsUtil           = require('../../../shared/posts')


module.exports = new LogicDataHelper({

    edit:        '_id by title md', //github.repoInfo slug created published submitted tags assetUrl repo stats synced
    details:     '_id by title tags assetUrl', // created published submitted
    preview:     '_id by title tags assetUrl body references toc' // created published submitted
  },

  ({select,assign,inflate,chain}) => ({

    author: (user, expert) => {
      var p = select(user,'name avatar bio')
      p.userId = user._id
      if (_.get(user,'auth.gh.gravatar_id'))
        p.avatar = `//0.gravatar.com/avatar/${user.auth.gh.gravatar_id}`
      else
        p.avatar = user.auth.gh.avatar_url
      if (expert)
        p.expertId = expert._id
      return p
    },

    url: r =>
      assign(r, { url:r.htmlHead ? r.htmlHead.canonical : `/posts/review/${r._id}` }),

    details: r =>
      select.details(chain(r, 'url', inflate.tags)),

    edit: r =>
      select.edit(assign(r, { md: {live:r.md,head:r.headMD} })),

    preview: r => {
      var {markdown,references} = PostsUtil.extractReferences(r.headMD)

      return select.preview(assign(r, {
        references,
        body: marked(markdown),
        toc: marked(toc(markdown))
      }))
    }

  })

)
.addCacheInflate('tags', ['name','slug','short','desc'])

