(function() {
  'use strict';

  angular.module('app.view.overview')
  .controller('OverviewViewController', OverviewViewController);

  OverviewViewController.$inject = ['$scope', '$location'];

  function OverviewViewController($scope, $location) {
    var vm = this;

    vm.title = 'Overview View';
    vm.prop = 'OverviewViewController';

    activate();

    function activate() {
      console.log("Overview view controller activate.");

      //$scope.$on('');
    }
  }

})();
