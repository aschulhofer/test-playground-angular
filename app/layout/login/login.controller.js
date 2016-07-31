(function() {
  'use strict';

  angular.module('app.view.login')
  .controller('LoginViewController', LoginViewController);

  LoginViewController.$inject = ['$scope', '$location'];

  function LoginViewController($scope, $location) {
    var vm = this;

    vm.title = 'Login View';
    vm.prop  = 'LoginViewController';

    activate();

    function activate() {
      console.log("Login view controller activate.");

      $scope.$on('LoginEvent', onLoginEvent);
    }

    function onLoginEvent() {
      console.log("Login Event:", arguments);
    }
  }

})();
