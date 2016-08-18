(function() {
  'use strict';

  angular.module('app').
  config(['$locationProvider', '$routeProvider', routeConfig]).
  config(['$httpProvider', 'jwtInterceptorProvider', 'UserSessionServiceProvider', jwtConfig]);

  function routeConfig($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/login', {
        templateUrl: 'layout/login/login.view.html',
        controller: 'LoginViewController',
        controllerAs: 'vm'
      })
      .when('/overview', {
        templateUrl: 'layout/overview/overview.view.html',
        controller: 'OverviewViewController',
        controllerAs: 'vm'
      });

    $routeProvider.otherwise({redirectTo: '/login'});
  }

  function jwtConfig($httpProvider, jwtInterceptorProvider, UserSessionServiceProvider) {
    jwtInterceptorProvider.tokenGetter = function() {
      return UserSessionServiceProvider.getToken();
    };

    $httpProvider.interceptors.push('jwtInterceptor');
  }

})();
