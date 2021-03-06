'use strict';

/**
 * @ngdoc overview
 * @name appenzoApp
 * @description
 * # appenzoApp
 *
 * Main module of the application.
 */
angular
  .module('appenzoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/blog', {
              templateUrl: 'views/blog.html',
              controller: 'AboutCtrl',
              controllerAs: 'blog'
            })
      .otherwise({
        redirectTo: '/'
      });
  });
