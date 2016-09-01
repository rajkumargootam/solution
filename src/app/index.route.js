(function() {
  'use strict';

  angular
    .module('solution')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'AppCtrl',
        controllerAs: 'app'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
