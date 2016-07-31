(function(){
  'use strict';

  angular.module('app', [
    'angular-jwt',
    'ngRoute',
    'app.views',
    'app.authentication',
    'app.loginForm'
  ]);

})();
