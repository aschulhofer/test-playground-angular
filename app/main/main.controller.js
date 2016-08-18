(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope) {
    var vm = this;

    vm.testMain = 'NOTHING HERE YET';

    activate();

    function activate() {

      $scope.$on('LoginEvent', function() {
        vm.testMain = 'LOGGED IN';
      });

      console.log('MainController ready.');
    }
  }
})();
