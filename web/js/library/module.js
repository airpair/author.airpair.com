angular.module("Author.Library", [])


.config(($routeProvider) => {

  $routeProvider.when('/', {
    template: require('./list.html'),
    controller: 'library:list'
  })

  $routeProvider.when('/library', {
    template: require('./list.html'),
    controller: 'library:list'
  })

})


.controller('library:list', function($scope, $location, API) {

  API('/me/library', library => {
    $scope.library = library
    $scope.bookmarks = library.bookmarks
    $scope.published = library.published
    $scope.forks = library.forks
    $scope.forked = library.forked
    $scope.reviews = library.reviews
    $scope.reviewed = library.reviewed
  })

})
