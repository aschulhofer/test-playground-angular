(function() {
  'use strict';

  var config = {

    events: {
      authentication: {
        loginSuccess: 'ws.auth.login.success',
        loginFailed: 'ws.auth.login.failed',
        logoutSuccess: 'ws.auth.logout.success',
        notAuthenticated: 'ws.auth.not.authenticated',
        notAuthorized: 'ws.auth.not.authorized'
      }
    },

    auth: {
      loginUrl: 'http://localhost:28080/resteasy-backend/api/auth/login',
      testUrl: 'http://localhost:28080/resteasy-backend/api/auth/test'
    }

  };

  angular.module('app')
    .constant('config', config)
    .constant('AUTHENTICATION_CONFIG', config.auth)
    .constant('AUTHENTICATION_EVENTS', config.events.authentication);
})();
