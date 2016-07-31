(function() {
  'use strict';

  angular.module('app.authentication').
  factory('authenticationservice', authenticationserviceFactory);

  authenticationserviceFactory.$inject = ['$q', '$http', 'authConfig'];

  function authenticationserviceFactory($q, $http, authConfig) {
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
      };

      return $http({
        url: authConfig.loginUrl,
        method: 'POST',
        data: requestData,
        // This request will NOT send the token as it has skipAuthentication
        skipAuthorization: true
      })
      .then(function scb(response) {
        console.log("success", response, response.data);

        var data = response.data;

        localStorage.setItem("id_token", data.jwt);

        return true;
      })
      .catch(function ecb(response) {
        console.error("failed", response);

        return $q.reject('Failed to login');
      });
    }

    function logout() {
      console.log('logout::not yet implemented');
    }

    function doTest() {
      var defer = $q.defer();
      console.log('TEST auth service method call');

      $http({
        url: authConfig.testUrl,
        method: 'POST'
      })
      .then(function scb(response) {
        console.log("success", response, response.data);

        defer.resolve(true);
      })
      .catch(function ecb(response) {
        console.error("failed", response);

        defer.reject('Failed to login, status: ' + response.status);
      });

      return defer.promise;
    }
  }
})();
