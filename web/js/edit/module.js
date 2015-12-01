angular.module("Author.Edit", [])


.config($routeProvider => {

  var route = (ctrl, template) => ({ controller: `edit:${ctrl}`, template })

  $routeProvider
    .when('/new', route('details', require('./details.html')))
    .when('/post-details/:id', route('details', require('./details.html')))
    .when('/editor/:id', route('markdown', require('./edit.html')))
    .when('/submit/:id', route('submit', require('./submit.html')))
    .when('/publish/:id', route('publish', require('./publish.html')))
})


.directive('todoHelper', $postsUtil => ({
  template: require('./todoHelper.html'),
  scope: { todo: '=todo', md: '=md', _id: '=id' },
  controller($scope) {
    $scope.next = $scope.todo.next
    $scope.$watch('md', md => $scope.wordstogo = 400 - $postsUtil.wordcount(md,50))
  }
}))


.controller('edit:details', ($scope, $routeParams, $location, StaticData, API) => {
  var _id = $routeParams.id

  $scope.save = data => API(`/posts${_id?'/details/'+_id:''}`, data, r =>
    window.location = `/${r.submitted?'preview':'editor'}/${_id}`)

  $scope.savable = ({tags,assetUrl,title}) =>
    _id ? (tags.length > 0 && assetUrl!='' && title != '') : (title != '')


  var setScope = (r) => {
    $scope._id = r._id
    // if ($scope.session._id == r.by.userId) { // don't wipe author with editor session
        // var bio = r.by.bio
        // r.by = _.extend(r.by, $scope.session)  // show latest social links
        // r.by.bio = bio // in case this post has it's own specific bio, don't wipe it!
    // }
    // })
    $scope.data = r
    $scope.data.assetUrl = r.assetUrl || ''
  }

  // $scope.$watch('post.assetUrl', function(value) {
  //   $scope.preview = {}
  //   if (!value)
  //   {
  //     $scope.preview.asset = `<span>Paste an image url or short link to a youtube movie<br /><br />Example<br /> ${StaticDataService.examplePostYouTube}<br /> ${StaticDataService.examplePostImage}</span>`
  //     return
  //   }
  //   else if (value.indexOf('http://youtu.be/') == 0) {
  //     var youTubeId = value.replace('http://youtu.be/', '');
  //     $scope.preview.asset = `<iframe width="640" height="360" frameborder="0" allowfullscreen="" src="//www.youtube-nocookie.com/embed/${youTubeId}"></iframe>`
  //   }
  //   else {
  //     $scope.post.assetUrl = value.replace('http:','https:')
  //     $scope.preview.asset = `<img src="${$scope.post.assetUrl}" />`
  //   }
  // });

  $scope.exampleImage = () => $scope.data.assetUrl = StaticData.examplePostImage

  if (_id)
    API(`/posts/details/${_id}`, setScope)
    //  , by: $scope.session, assetUrl: '//www.airpair.com/static/img/css/blog/example2.jpg'
  else
    setScope({ title: '', tags: []})
})


.controller('edit:markdown', ($scope, $routeParams, $timeout, $window, StaticData, API, $postsUtil) => {
  var throttlePreviewMS, unsavedMsg;
  var _id = $routeParams.id
  $scope._id = _id


  var isDefaultMD = () =>
    $scope.savedMD == 'new' && StaticData.defaultPostMarkdown ==
      window.ace.edit($('#aceeditor')[0]).getSession().getValue()


  var refreshSaved = () => {
    var editSession = window.ace.edit($('#aceeditor')[0]).getSession()
    // var cols = editSession.getScreenWidth()
    var md = editSession.getValue()
    $scope.data.md = md // $postsUtil.splitLines(editSession.doc.$lines.slice(0), cols, editSession.doc).join('\n')

    var saved = $scope.savedMD == md || isDefaultMD()

    //-- Refresh the throttle
    if (!saved)
      throttlePreviewMS = ((md.length%200)+10) * 4

    //-- Only set these once on the first unsaved change
    if (!saved && !unsavedMsg) {
      unsavedMsg = `Looks like you have unsaved changes...`
      $window.onbeforeunload = () => refreshSaved() ? null : unsavedMsg
      $scope.$on("$locationChangeStart", function(event) {
        if (!refreshSaved()) {
          alert(unsavedMsg)
          event.preventDefault()
        }
      })
    }

    $scope.saved = saved
    return saved
  }

  var timer = null
  var refreshPreview = function() {
    if (timer) {
      $timeout.cancel(timer)
      timer = null
    }
    refreshSaved()
  //   if ($scope.saved && $scope.preview.body) return
  //   $scope.data.md = md
  //   PostsUtil.getPreview(md, (e, preview) => {
  //     if (e) throw e
  //     $scope.preview = preview
  //   })
  }

  $scope.aceChanged = function(e) {
    if ($scope.saved && isDefaultMD()) return
    if (!throttlePreviewMS) return refreshPreview()
    if (timer == null)
      timer = $timeout(refreshPreview, throttlePreviewMS)
  }

  $scope.aceLoaded = function(_editor) {
    _editor.$blockScrolling = Infinity
  }


  var setScope = function(r) {
    $scope.isAuthor = r.by.userId == $scope.session._id

    if (r.published && !r.submitted && $scope.isAuthor)
      window.location = `/submit/${_id}`

    $scope.data = { _id, commitMessage: '' }
    if (r.md.live == "new")
      $scope.data.md = StaticData.defaultPostMarkdown
    else
      $scope.data.md = r.md.head || r.md.live

    $scope.savedMD = r.md.head || r.md.live
    $scope.saved = true
    $scope.title = r.title
    $scope.submitted = r.submitted
    $scope.published = r.published
    $scope.url = r.url
    $scope.todo = r.todo
    $scope.previewable = $postsUtil.previewable(r)
    $scope.toPublish = $scope.isAuthor && r.todo.next == 'publish'
    $scope.toSubmit = $scope.isAuthor && r.todo.next == 'submit'
    $scope.underWordcount = r.stats.words < 400

    $scope.previewLink = id =>
      $scope.previewable && $scope.saved ? `/preview/${id}` : ''
    $scope.redirectSubmit = id => window.location = `/submit/${id}`
    $scope.redirectPublish = id => window.location = `/publish/${id}`
  }

  API(`/posts/markdown/${_id}`, setScope, e => {
    $scope.returnTo = window.location.pathname
    if (e.message && e.message.match('Not Found'))
      $scope.editErr = e
    // -- should be able to return to library where a token refresh is suggested
    // else if (e.message && e.message.match('Bad credentials'))
    //   $scope.credentialsErr = e
    else
      window.location = "/library"
  })

  $scope.save = () => {
    refreshSaved()
    if ($scope.submitted && $scope.data.commitMessage == "")
      return alert('Commit message required')
    API(`/posts/markdown/${_id}`, $scope.data, setScope)
  }

  // $scope.sync = () => $scope.published
  //   ? alert("Ask an editor to sync your post")
  //   : API(`/posts/sync/${_id}`, {_id}, setScope)

})


.controller('edit:submit', ($scope, $q, $routeParams, $timeout, API) => {
  var _id = $routeParams.id
  $scope._id = _id

//   DataService.posts.getByIdForSubmitting({_id}, (post) => {
//     if (post.submitted)
//       window.location = '/posts/me?submitted='+post._id
//     $scope.post = post
//     $scope.repoAuthorized = post.submit.repoAuthorized
//     $scope.slugStatus = post.submit.slugStatus
//   })

//   $scope.checkSlugAvailable = (slug) => {
//     DataService.posts.checkSlugAvailable({_id,slug}, (r) => $scope.slugStatus = r )
//   }

//   $scope.submitForReviewDeferred = () => {
//     var deferred = $q.defer()
//     var slug = $scope.post.slug
//     if (slug.length > 50) {
//       alert('Use a slug smaller than 50 chars'); $timeout(deferred.reject, 10)
//     }
//     else if (slug.indexOf('--') != -1){
//       alert('Clean up that slug url! No double -- please :)'); $timeout(deferred.reject, 10)
//     }
//     else {
//       DataService.posts.submitForReview($scope.post, (r) => {
//         window.location = '/posts/me?submitted='+r._id
//         deferred.resolve(r)
//       },
//       (e) => {
//         ServerErrors.add(e)
//         deferred.reject(e)
//       })
//     }

//     return deferred.promise
//   }

})



.controller('edit:publish', function($scope, DataService, $routeParams) {
  var _id = $routeParams.id

//   $scope.setPublishedOverride = () => {
//     if (!$scope.data.publishedOverride)
//       $scope.data.publishedOverride = $scope.post.published || moment().format()
//   }

//   $scope.user = () => { return $scope.post.by }
//   $scope.selectUser = (user) => {
//     $scope.post.by = {
//       userId: user._id,
//       name: user.name,
//       avatar: user.avatar,
//       bio: user.bio,
//       username: user.username
//     };
//     $scope.data.by = $scope.post.by
//   }

//   var setScope = (r) => {
//     var isAdmin =  _.contains($scope.session.roles, 'admin')
//     var isEditor =  _.contains($scope.session.roles, 'editor')
//     $scope.post = r
//     $scope.data = _.pick(r, '_id', 'meta', 'tmpl', 'by')
//     $scope.$watch('data.meta.description', (value) => $scope.data.meta.ogDescription = value )
//     $scope.$watch('data.meta.ogImage', (value) => $scope.post.meta.ogImage = value )
//     $scope.canPublish = r.reviews && r.reviews.length > 0 || isAdmin || isEditor
//     $scope.canPropagate = isAdmin || isEditor || !r.published
//     $scope.canChangeAuthor = isAdmin
//     $scope.canSetTemplate = isAdmin
//     $scope.canOverrideCanonical = isAdmin
//     $scope.headPropagated = (r.mdHEAD) ? r.md == r.mdHEAD : true
//   }

//   DataService.posts.getByIdForPubishing({_id}, setScope)

//   $scope.propagate = () =>
//     DataService.posts.propagateFromHEAD({_id}, setScope)

//   $scope.submitPublish = (formValid, data, postPublishForm) => {
//     if (formValid)
//       DataService.posts.publish(data, (r) => window.location = r.meta.canonical)
//   }

})
