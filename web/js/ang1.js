window.$      = require('../components/jquery/dist/jquery.js')
window._      = require('../components/lodash/lodash.js')

require('../components/angular/angular.js')
require('../components/angular-route/angular-route.js')
require('../components/angular-load/angular-load.js')

require('../static/js/ui-bootstrap-custom-tpls-0.14.3.js')
require('../static/js/moment-timezone-with-data-2010-2020.js')
require('../static/js/prism-custom.js')

var marked    = require('../static/js/marked-0.3.5.js')

require('../components/ace-builds/src-min-noconflict/ace.js');
require('../components/angular-ui-ace/ui-ace.js');
require('../components/ace-builds/src-min-noconflict/ext-language_tools.js');
require('../components/ace-builds/src-min-noconflict/mode-markdown.js');
require('../components/ace-builds/src-min-noconflict/theme-dawn.js');

require('./.lib/ang.v1/directives/_index.js')
require('./.lib/ang.v1/services/_index.js')
require('./.lib/ang.v1/util/_index.js')

require('./ang.v1/services/_index.js')

require('./library/module.js')
require('./activity/module.js')
require('./edit/module.js')


angular.module("Author", [

  //-- External
  'ngRoute',
  'ui.ace',

  //-- App common
  'AirPair.Directives',
  'AirPair.Services',
  'AirPair.Util',

  //-- App modules (namespaces)
  'Author.Services',
  'Author.Library',
  'Author.Edit',
  'Author.Activity',

])


.config($locationProvider => {
  $locationProvider.html5Mode(true)
})


.factory('$postsUtil', () => Object.assign({marked},
  require('../../shared/posts.js'))
)


.factory('Shared', () => Object.assign(_,
    //-- Darn hack not sure what's going on
    require('../static/js/.lib/object.js'),
    require('../static/js/.lib/string.js'),
    require('../static/js/.lib/date.js')
  )
)
