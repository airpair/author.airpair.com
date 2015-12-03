angular.module("Author.Library", [])


.config($routeProvider => {

  var list = { template: require('./list.html'), controller: 'library:list' }
  $routeProvider
    .when('/', list)
    .when('/library', list)

})


.controller('library:list', function($rootScope, $scope, $location, API) {

  if ($location.search().err)
    $rootScope.serverErrs.push(decodeURIComponent($location.search().err))


  API('/me/library', r => {
    $scope.library =   r
    $scope.scopes =    r.scopes

    $scope.reviews =   r.reviews

    $scope.mine =      r.mine
    $scope.drafts =    r.drafts
    $scope.inreview =  r.inreview
    $scope.published = r.published

    $scope.forked =    r.forked
    $scope.reviewed =  r.reviewed

    if ($location.search().submitted)
      $scope.submitted = _.find(r.mine, p => p._id == $location.search().submitted)


  })

  $scope.delete = _id =>
    API(`delete/posts/${_id}`, r => window.location = '/library')

})





