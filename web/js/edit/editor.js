module.exports = function($scope, $routeParams, $timeout, $window, StaticData, API, $postsUtil) {
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
    $scope.preview = $postsUtil.getPreview($scope.data, $postsUtil.marked)

    // if ($scope.saved && $scope.preview.body) return
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
    $scope.post = r

    if (r.published && !r.submitted && $scope.isAuthor)
      window.location = `/submit/${_id}`

    $scope.data = { _id, title: r.title, assetUrl: r.assetUrl, commitMessage: '' }
    if (r.md.live == "new")
      $scope.data.md = StaticData.defaultPostMarkdown
    else
      $scope.data.md = r.md.head || r.md.live

    $scope.savedMD = r.md.head || r.md.live
    $scope.syncedMD = r.md.head === r.md.live
    $scope.saved = true
    $scope.title = r.title
    $scope.slug = r.slug
    $scope.repo = r.repo
    $scope.submitted = r.submitted
    $scope.published = r.published
    $scope.todo = r.todo
    $scope.previewable = $postsUtil.previewable(r)
    $scope.toPublish = $scope.isAuthor && r.todo.next == 'publish'
    $scope.toSubmit = $scope.isAuthor && r.todo.next == 'submit'
    $scope.wordcount = r.stats.words
    $scope.underWordcount = r.stats.words < 400

    $scope.previewLink = id =>
      $scope.previewable && $scope.saved ? `https://www.airpair.com/posts/preview/${id}` : ''
    $scope.redirectSubmit = id => window.location = `/submit/${id}`
    $scope.redirectPublish = id => window.location = `/publish/${id}`

    if (!$scope.previewMode) $scope.previewToggle('mobile-portrait')
    if (screen.width > 640) $timeout(refreshPreview, 1200)
  }

  API(`/posts/markdown/${_id}`, setScope, e => {
    $scope.returnTo = window.location.pathname
    if (e.message && e.message.match('Not Found'))
      $scope.editErr = e
    // -- should be able to return to library where a token refresh is suggested
    // else if (e.message && e.message.match('Bad credentials'))
    //   $scope.credentialsErr = e
    else
      window.location = `/library?err=${e.message}`
  })

  $scope.save = () => {
    refreshSaved()
    if ($scope.submitted && $scope.data.commitMessage == "")
      return alert('Commit message required')
    API(`/posts/markdown/${_id}`, $scope.data, setScope)
  }

  $scope.sync = () => $scope.published
    ? alert("Ask an editor to sync your post")
    : API(`/posts/sync/${_id}`, {_id}, setScope)


  $scope.previewToggle = mode => {
    $scope.previewMode = mode
    $scope.previewW = StaticData.viewMode[mode]
  }

}
