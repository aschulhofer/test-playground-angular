(function() {
  'use strict';

  angular.module('app.loginForm').
  component('loginForm', {
    templateUrl: 'components/login-form/login-form.template.html',
    controller: LoginFormController,
    controllerAs: 'lfcvm'
  });

  LoginFormController.$inject = ['$scope', 'authenticationservice', 'AUTHENTICATION_EVENTS'];

  function LoginFormController($scope, authenticationservice, AUTHENTICATION_EVENTS) {
    var lfcvm = this;

    lfcvm.title = 'Login';

    lfcvm.username = '';
    lfcvm.password = '';

    lfcvm.onLoginClick = onLoginClick;

    lfcvm.onTestClick  = onTestClick;

    function onLoginClick() {
      console.log("LOGIN CLICKED", lfcvm.username, lfcvm.password);

      authenticationservice
      .login(lfcvm.username, lfcvm.password)
      .then(function(value) {
        console.log('Login successful: ', value);

        $scope.$emit(AUTHENTICATION_EVENTS.loginSuccess, {success: true});
      })
      .catch(function(reason) {
        console.error('Login failed: ', reason);

        $scope.$emit(AUTHENTICATION_EVENTS.loginFailed, {success: false, reason: reason});
      });
    }

    function onTestClick() {
      console.log("TEST CLICKED", lfcvm.username, lfcvm.password);

      authenticationservice
      .doTest()
      .then(function(value) {
        console.log('Testcall successful: ', value);
      })
      .catch(function(reason) {
        console.error('Testcall failed: ', reason);
      });
    }

  }

})();
