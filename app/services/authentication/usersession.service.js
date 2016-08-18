(function() {
  'use strict';

  angular
    .module('app.authentication')
    .provider('UserSessionService', UserSessionServiceProvider);

  UserSessionServiceProvider.$inject = [];

  function UserSessionServiceProvider() {

    this.$get = UserSessionServiceFactory;

    this.storeToken = function(token) {
      localStorage.setItem("id_token", token);
    };

    this.getToken = function() {
      return localStorage.getItem("id_token");
    };

    this.removeToken = function() {
      localStorage.removeItem("id_token");
    };

    var self = this;

    function UserSessionServiceFactory() {
      var jwtToken = null;
      var username = null;
      var roles    = null;

      return {
        create: create,
        destroy: destroy,
        getToken: getToken,

        debug: debug
      };

      function create(newJwtToken, newUsername, newRoles) {
        jwtToken = newJwtToken;
        username = newUsername;
        roles    = newRoles;

        self.storeToken(jwtToken);
      }

      function destroy() {
        jwtToken = null;
        username = null;
        roles    = null;

        self.removeToken();
      }

      function getToken() {
        return self.getToken();
      }

      function debug() {
        console.log('UserSession', username, roles, jwtToken);
      }

    }
  }


})();
