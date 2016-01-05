(function () {
    'use strict';

    angular
        .module('myApp.components')
        .directive('csMap', mapDirective);

    mapDirective.$inject = ['URL_VIEWS'];

    function mapDirective(URL_VIEWS) {
        // Usage: 
        //      <cs-map></cs-map>
        // Creates: 
        //      A Google Maps map with marker.
        var directive = {
            bindToController: true,
            controller: mapController,
            controllerAs: 'map',
            restrict: 'E',
            scope: {
                event: '='
            },
            templateUrl: URL_VIEWS.components + 'map/map.view.html',
            link: function (scope) {
                var venue = scope.map.event.venue;
                if (venue.lat == 0 && venue.lon == 0) {
                    scope.map.event.venue.lat = '41.400010';
                    scope.map.event.venue.lon = '2.169357';
                }
                if (venue.name === undefined) { scope.map.event.venue.name = "Landing Page"; }
            }
        };

        return directive;
    }
    
    /* @ngInject */
    function mapController() {

    }

})();