(function() {
  'use strict';

  angular.module('app.loginForm').
  component('loginForm', {
    templateUrl: 'components/login-form/login-form.template.html',
    controller: LoginFormController,
    controllerAs: 'lfcvm'
  });

  LoginFormController.$inject = ['authenticationservice'];

  function LoginFormController(authenticationservice) {
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
      })
      .catch(function(reason) {
        console.error('Login failed: ', reason);
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
