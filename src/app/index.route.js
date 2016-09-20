(function() {
  'use strict';

  angular
    .module('solution')
    .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/main/main.html',
          controller: 'AppCtrl',
          controllerAs: 'app'
        })

        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/main/dashboard.html',
          controller: 'LeftCtrl',
          controllerAs: 'dash'
        });


      $urlRouterProvider.otherwise('/home');
    }

  })();
