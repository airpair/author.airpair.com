window.$      = require('../components/jquery/dist/jquery.js')
window._      = require('../components/lodash/lodash.js')

require('../components/angular/angular.js')
require('../components/angular-route/angular-route.js')
require('../components/angular-load/angular-load.js')

require('../public/js/ui-bootstrap-custom-tpls-0.14.3.js')
require('../public/js/moment-timezone-with-data-2010-2020.js')

require('./ang.v1/directives/_index.js')
require('./ang.v1/services/_index.js')
require('./ang.v1/util/filters.js')

require('./library/module.js')

angular.module("Author", [

  //-- External
  'ngRoute',

  //-- App common
  'AirPair.Filters',
  'AirPair.Directives',
  'AirPair.Services',

  //-- App modules (namespaces)
  'Author.Library'

])


.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
})


.factory('Shared', () => {
  return Object.assign(_,
    //-- Darn hack not sure what's going on
    require('../js/.lib/object.js'),
    require('../js/.lib/string.js'),
    require('../js/.lib/date.js')
  )
})
