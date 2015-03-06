(function() {
    'use strict';

    angular
        .module('calendar.events')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/events',
                config: {
                    templateUrl: 'app/events/events.tpl.html',
                    controller: 'Avengers',
                    controllerAs: 'vm',
                    title: 'events',
                    // settings: {
                    //     nav: 2,
                    //     content: '<i class="fa fa-lock"></i> Avengers'
                    // }
                }
            }
        ];
    }
})();