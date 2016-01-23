module.exports = function($scope, $routeParams, $timeout, $q, API, ERR) {

  var _id = $routeParams.id
  $scope._id = _id


  var setScope = r => {
    $scope.post = r
    $scope.submission = r.submission
  }

  var setScopeError =  e => {
    if (e.message.match('cannot be submitted more than once'))
      window.location = `/library?submitted=${_id}`
    else
      ERR.addServerError(e)
  }


  API(`/posts/submission/${_id}`, setScope, setScopeError)


  var refresh = function() {
    API(`/posts/submission/${_id}?slug=${$scope.post.slug}`, setScope, setScopeError)
  }

  var timer = null
  $scope.refreshSubmission = () => {
    $scope.submission.valid = null
    if (timer) {
      $timeout.cancel(timer)
      timer = null
    }
    timer = $timeout(refresh, 2000)
  }

  $scope.submitDeferred = () => {
    var deferred = $q.defer()
    var slug = $scope.post.slug
    if (slug.length > 50) {
      alert('Use a slug smaller than 50 chars');
      $timeout(deferred.reject, 10)
    }
    else if (slug.indexOf('--') != -1){
      alert('Clean up that slug url! No double -- please :)');
      $timeout(deferred.reject, 10)
    }
    else {
      API(`/posts/updatesubmit/${_id}`,
        $scope.post,
        r => {
          window.location = '/library?submitted='+r._id
          deferred.resolve(r)
        },
        e => {
          ERR.addServerError(e)
          deferred.reject(e)
        })
    }
    return deferred.promise
  }

}
