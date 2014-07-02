'use strict';

/**
 * @ngdoc overview
 * @name ngmapAppApp
 * @description
 * # ngmapAppApp
 *
 * Main module of the application.
 */
angular
  .module('ngmapApp', [
    'ngResource',
    'ngRoute',
    'google-maps',
    'ui.bootstrap'
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
