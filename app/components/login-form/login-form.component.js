(function() {
  'use strict';

  angular.module('app.loginForm').
  component('loginForm', {
    templateUrl: 'components/login-form/login-form.template.html',
    controller: LoginFormController,
    controllerAs: 'vm'
  });

  LoginFormController.$inject = ['$scope', 'authenticationservice', 'AUTHENTICATION_EVENTS'];

  function LoginFormController($scope, authenticationservice, AUTHENTICATION_EVENTS) {
    var vm = this;

    vm.title = 'Login';

    vm.credentials = {
      username: '',
      password: ''
    };

    vm.onLoginClick = onLoginClick;
    vm.onTestClick  = onTestClick;

    function onLoginClick() {
      console.log("LOGIN CLICKED", vm.credentials);

      authenticationservice
      .login(vm.credentials.username, vm.credentials.password)
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
      console.log("TEST CLICKED", vm.credentials);

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
