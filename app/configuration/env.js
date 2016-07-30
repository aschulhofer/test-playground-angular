(function() {
  'use strict';

  var config = {

    auth: {
      loginUrl: 'http://localhost:28080/resteasy-backend/api/auth/login',
      testUrl: 'http://localhost:28080/resteasy-backend/api/auth/test'
    }

  };

  angular.module('app')
    .constant('config', config)
    .constant('authConfig', config.auth);
})();
