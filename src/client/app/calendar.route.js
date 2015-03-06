(function() {
    'use strict';

    angular.module('calendar')
    .config(runConfig);

    /* @ngInject */
    function runConfig($routeProvider) {
        $routeProvider.otherwise( { redirectTo: '/events' } );            
    }

})();