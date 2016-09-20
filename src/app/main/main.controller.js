(function() {
  'use strict';

  angular
    .module('solution')
      .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {

      })

      .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.dashboard = function(){
          console.log("hi");

        }

      });

})();
