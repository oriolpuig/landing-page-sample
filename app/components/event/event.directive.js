(function () {
    'use strict';

    angular
        .module('myApp.components')
        .directive('csEvent', eventDirective);

    eventDirective.$inject = ['URL_VIEWS'];

    function eventDirective(URL_VIEWS) {
        // Usage: 
        //      <cs-event></cs-event>
        // Creates: 
        //      A snapshot of event.
        var directive = {
            controller: eventController,
            restrict: 'E',
            scope: {
                event: '=',
                summary: '=',
                showImage: '=',
                showMap: '='
            },
            templateUrl: URL_VIEWS.components + 'event/event.view.html'
        };

        return directive;
    }
    
    /* @ngInject */
    function eventController() {

    }

})();