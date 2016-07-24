(function() {
  'use strict';

  angular.module('app.authentication').
  factory('authenticationservice', authenticationservice)

  authenticationservice.$inject = ['$http'];

  function authenticationservice($http) {
    return {
      login: login,
      logout: logout,

      doTest: doTest
    };

    function login(username, password) {
      console.log('login::not yet implemented');

      var requestData = {
        username: username,
        password: password
      }

      $http({
        url: 'http://localhost:28080/resteasy-backend/api/auth/login',
        method: 'POST',
        data: requestData,
        // This request will NOT send the token as it has skipAuthentication
        skipAuthorization: true
      })
      .then(function scb(response) {
        console.log("success", response, response.data)

        var data = response.data;

        localStorage.setItem("id_token", data.jwt);
      },
      function ecb(response) {
        console.error("failed", response)
      });
    }

    function logout() {
      console.log('logout::not yet implemented');
    }

    function doTest() {
      console.log('TEST auth service method call');

      $http({
        url: 'http://localhost:28080/resteasy-backend/api/auth/test',
        method: 'POST'
      })
      .then(function scb(response) {
        console.log("success", response, response.data)
      },
      function ecb(response) {
        console.error("failed", response)
      });
    }
  }
})();
