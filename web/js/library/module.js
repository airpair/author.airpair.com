angular.module("Author.Library", [])


.config($routeProvider => {

  $routeProvider.when('/', {
    template: require('./list.html'),
    controller: 'library:list'
  })

  $routeProvider.when('/library', {
    template: require('./list.html'),
    controller: 'library:list'
  })

  // $routeProvider.when('/forks', {
  //   template: require('./forked.html'),
  //   controller: 'library:forked'
  // })

})


.controller('library:list', function($scope, $location, API) {

  API('/me/library', lib => {
    $scope.library =   lib
    $scope.scopes =    lib.scopes

    $scope.newest =    lib.newest

    $scope.drafts =    lib.drafts
    $scope.inreview =  lib.inreview
    $scope.published = lib.published
    $scope.mine =      lib.drafts.length +
                       lib.inreview.length +
                       lib.published.length

    $scope.forked =    lib.forks
    $scope.reviewed =  lib.reviewed
  })

})


.controller('library:forked', function($scope, API) {

})


.controller('library:fork', ($scope, $routeParams, API) => {
  var _id = $routeParams.id
  // $scope._id = _id

  // DataService.posts.getByIdForForking({_id}, (r) => {
  //   $scope.post = r
  //   $scope.isOwner = r.by.userId == $scope.session._id
  //   $scope.repoAuthorized = r.submit.repoAuthorized
  // })

  // $scope.fork = () =>
  //   DataService.posts.fork($scope.post, (result) =>
  //     window.location = '/posts/me?forked='+_id )

})

// .controller('PostsListCtrl', function($scope, $location, DataService, SessionService, PostsUtil, Roles) {

//   DataService.posts.getMyPosts({}, function (r) {
//     var meUserId = $scope.session._id
//     var recent = []
//     var all = []
//     var mine = []
//     var forks = []

//     if ($scope.session._id)
//     {
//       for (var i=0;i<r.length;i++) {
//         r[i] = PostsUtil.extendWithReviewsSummary(r[i])
//         r[i].forked = Roles.post.isForker($scope.session, r[i])
//         r[i].mine = r[i].by.userId == $scope.session._id
//         if (!r[i].published && r[i].submitted)
//           recent.push(r[i])
//         if (r[i].mine) {
//           r[i].repo = `airpair/${r[i].slug}`
//           mine.push(r[i])
//         }
//         if (r[i].forked) {
//           r[i].repo = `${$scope.session.social.gh.username}/${r[i].slug}`
//           forks.push(r[i])
//           r[i].needsMyReview = !_.find(r[i].reviews,(rev)=>rev.by._id == meUserId)
//           r[i].needsMyFork = !_.find(r[i].forkers,(f)=>f.userId == meUserId)
//         }
//       }

//       if ($scope.session.social && $scope.session.social.gh)
//       {
//         if ($location.search().submitted)
//           $scope.submitted = _.find(mine, (p)=> p._id == $location.search().submitted)

//         var toForkId = $location.search().fork
//         if (toForkId)
//         {
//           $scope.forked = _.find(forks, (f) => toForkId == f._id)
//           // if (!$scope.forked)  //-- sometimes we just want to refork it...
//           DataService.posts.addForker({_id:$location.search().fork}, function (forked) {
//             if (!$scope.forked) {
//               $scope.forked = forked
//               $scope.all = _.union([forked], $scope.all)
//               $scope.forks = _.union([forked], $scope.forks)
//               $scope.filterMyPosts($scope.filter)
//             }
//           })
//         }
//       }

//     }

//     $scope.all = _.sortBy(_.union(mine,forks),(p)=>moment(p.lastTouch.utc).format('X')*-1)
//     $scope.mine = mine
//     $scope.forks = forks
//     $scope.filterMyPosts('all')
//     $scope.recent = _.sortBy((recent.length > 0) ? recent : r,(p)=>moment(p.submitted).format('X')*-1)
//   })

//   $scope.delete = (_id) =>
//     DataService.posts.deletePost({_id}, (r) => window.location = '/posts/me')

//   $scope.filterMyPosts = (filter) => {
//     $scope.filter = filter
//     $scope.contributions = $scope[filter]
//   }

// })
