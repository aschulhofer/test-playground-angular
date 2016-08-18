(function() {
  'use strict';

  angular.module('app.authentication').
  factory('UserSessionService', UserSessionServiceFactory);

  UserSessionServiceFactory.$inject = [];

  function UserSessionServiceFactory() {
    var jwtToken = null;
    var username = null;
    var roles    = null;

    return {
      create: create,
      destroy: destroy,

      debug: debug
    };

    function create(newJwtToken, newUsername, newRoles) {
      jwtToken = newJwtToken;
      username = newUsername;
      roles    = newRoles;

      localStorage.setItem("id_token", jwtToken);
    }

    function destroy() {
      jwtToken = null;
      username = null;
      roles    = null;

      localStorage.removeItem("id_token");
    }

    function debug() {
      console.log('UserSession', username, roles, jwtToken);
    }

  }
})();
