angular.module("Author.Library", [])


.config($routeProvider => {

  var list = { template: require('./home.html'), controller: 'library:home' }
  $routeProvider
    .when('/', list)
    .when('/library', list)

})


.controller('library:home', function($scope, $location, ERR, API) {

  ERR.checkQuerystring()

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

})





