'use strict';

angular
  .module('ngmapApp', [
    'ngResource',
    'ngRoute',
    'google-maps',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
