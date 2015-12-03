angular.module("Author.Activity", [])


.config($routeProvider => {

  $routeProvider
    .when('/activity',
      { controller:'activity:recent', template: require('./list.html')} )
    .when('/activity/post/:id',
      { controller:'activity:post', template: require('./detail.html')} )
})



.directive('postTile', function() {

  return {
    restrict: 'E',
    template: require('./postTile.html'),
    link(scope, element, attrs) {
      scope.post = scope.$eval(attrs.post)
    }
  }

})


.controller('activity:recent', ($scope, $routeParams, API, $postsUtil) => {

  API(`/activity/recent`, r => $scope.posts =  r )

})


.controller('activity:post', ($scope, $routeParams, API, $postsUtil) => {
  var _id = $routeParams.id

  var setScope = r =>
    $scope.data = r

  API(`/activity/post/${_id}`, setScope)
})
