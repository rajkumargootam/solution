(function() {
  'use strict';

  angular
    .module('solution')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
