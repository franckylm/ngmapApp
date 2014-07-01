'use strict';

/**
 * @ngdoc overview
 * @name ngmapApp
 * @description
 * # ngmapApp
 *
 * Main module of the application.
 */
angular
  .module('ngmapApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
