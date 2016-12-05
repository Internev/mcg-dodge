// var angular = require('angular');
// require('angular-router-browserify')(angular);
// var base = require('./views/base');
//
// console.log(base);
// console.log(base.name);
angular.module('dodge', ['ngRoute', 'base'])
.config(($httpProvider, $routeProvider)=>{

  $routeProvider
    .when('/', {
      templateUrl: './views/base.html',
      controller: 'BaseController',
      controllerAs: 'base'
    })
    .otherwise({
      redirectTo: '/'
    });

});
