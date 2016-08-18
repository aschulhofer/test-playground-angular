(function() {
  'use strict';

  angular.module('app.view.login')
  .controller('LoginViewController', LoginViewController);

  LoginViewController.$inject = ['$scope', '$location', 'AUTHENTICATION_EVENTS'];

  function LoginViewController($scope, $location, AUTHENTICATION_EVENTS) {
    var vm = this;

    vm.title = 'Login View';
    vm.prop  = 'LoginViewController';

    activate();

    function activate() {
      console.log("Login view controller activate.");

      $scope.$on(AUTHENTICATION_EVENTS.loginSuccess, onLoginSuccessEvent);
      $scope.$on(AUTHENTICATION_EVENTS.loginFailed, onLoginFailedEvent);
    }

    function onLoginSuccessEvent(event, payload) {
      console.log("Login Success Event:", arguments);
      $location.path('/overview');
    }

    function onLoginFailedEvent(event, payload) {
      console.log("Login Failed Event:", arguments);
    }
  }

})();
