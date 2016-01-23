angular.module("Author.Edit", []).config($routeProvider => {

  var route = (ctrl, template) => ({ controller: `edit:${ctrl}`, template })

  $routeProvider
    .when('/new', route('info', require('./info.html')))
    .when('/post-info/:id', route('info', require('./info.html')))
    .when('/editor/:id', route('editor', require('./editor.html')))
    .when('/submit/:id', route('submit', require('./submit.html')))
    // .when('/publish/:id', route('publish', require('./publish.html')))

})


.directive('editHeader', (API, Shared, $postsUtil) => ({
  template: require('./header.html'),
  scope: { post: '=post', step: '=step', editing: '=editing' },
  controller($rootScope, $scope) {

    $scope.status = $postsUtil.status($scope.post)
    if ($scope.editing === undefined) $scope.editing = false

    $scope.delete = id => API(`/posts/delete/${id}`,
                              r => window.location = '/library')

    $rootScope.$watch('session', x => {
      if ($rootScope.session && $scope.post) {
        $scope.isAuthor = $scope.post.by.userId == $rootScope.session._id
        $scope.submittable = $postsUtil.submittable($scope.post)
      }
    })

  }
}))


.directive('todoHelper', Shared => ({
  template: require('./todoHelper.html'),
  scope: { todo: '=todo', md: '=md', _id: '=id' },
  controller($scope) {
    $scope.next = $scope.todo.next
    $scope.$watch('md', md => $scope.wordstogo = 400 - Shared.wordcount(md,50))
  }
}))


.directive('preview', (Shared, $postsUtil, APWindow) => ({
  template: require('./preview.html'),
  controller($scope, $timeout) {
    $scope.$watch('preview.body', x => {
      console.log('previewupdate.d')
      $timeout(function() { APWindow.codeblocks.highlight({}) }, 10)
    })
  }
}))


.controller('edit:info', function($scope, $routeParams, $location, StaticData, API) {
       require('./info').apply(this, arguments) })
.controller('edit:submit', function($scope, $routeParams, $timeout, $q, API, ERR) {
       require('./submit').apply(this, arguments) })
.controller('edit:editor', function($scope, $routeParams, $timeout, $window, StaticData, API, $postsUtil) {
       require('./editor').apply(this, arguments) })


// if ($scope.session._id == r.by.userId) { // don't wipe author with editor session
  // var bio = r.by.bio
  // r.by = _.extend(r.by, $scope.session)  // show latest social links
  // r.by.bio = bio // in case this post has it's own specific bio, don't wipe it!
// }
// })
