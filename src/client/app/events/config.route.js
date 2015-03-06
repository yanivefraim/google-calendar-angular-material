(function() {
    'use strict';

    angular
        .module('calendar.events')
        .config(runConfig);

    /* @ngInject */
    function runConfig($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'events.tpl.html',
            controller: 'EventsCtrl',
            controllerAs: 'vm'
        });

        $routeProvider.otherwise( { redirectTo: '/events' } );            
    }

})();