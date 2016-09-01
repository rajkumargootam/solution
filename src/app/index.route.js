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
      })

      .state('dashboard', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'LeftCtrl',
        controllerAs: 'left'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
