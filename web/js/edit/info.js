module.exports = function($scope, $routeParams, $location, StaticData, API) {

  var _id = $routeParams.id
  $scope.preview = {_id}

  $scope.save = data => API(`/posts${_id?'/details/'+_id:''}`, data,
    r => window.location = `/editor/${r._id}` )

  $scope.savable = ({tags,assetUrl,title}) =>
    _id ? (tags.length > 0 && assetUrl!='' && title != '') : (title != '')

  var setScope = (r) => {
    $scope._id = r._id
    $scope.preview = r
    $scope.data = r
    $scope.data.assetUrl = r.assetUrl || ''
  }

  $scope.exampleImage = () => $scope.data.assetUrl = StaticData.examplePostImage
  $scope.$watch('data.assetUrl', val => $scope.preview.assetUrl = val)

  _id ? API(`/posts/details/${_id}`, setScope)
      : setScope({ title: '', tags: []})

}
