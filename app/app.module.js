(function(){
  'use strict';

  angular.module('app', [
    'angular-jwt',
    'ngRoute',
    'app.main',
    'app.views',
    'app.authentication',
    'app.loginForm'
  ]);

})();
