(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'AUTHENTICATION_EVENTS'];

  function MainController($scope, AUTHENTICATION_EVENTS) {
    var vm = this;

    vm.testMain = 'NOTHING HERE YET';

    activate();

    function activate() {

      $scope.$on(AUTHENTICATION_EVENTS.loginSuccess, function() {
        vm.testMain = 'LOGGED IN';
      });

      $scope.$on(AUTHENTICATION_EVENTS.loginFailed, function() {
        vm.testMain = 'LOGGED FAILED';
      });

      console.log('MainController ready.');
    }
  }
})();
