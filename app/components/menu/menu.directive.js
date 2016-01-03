(function () {
    'use strict';

    angular
        .module('myApp.components')
        .directive('csMenu', menuDirective);

    menuDirective.$inject = ['URL_VIEWS'];

    function menuDirective(URL_VIEWS) {
        // Usage: 
        //      <cs-menu></cs-menu>
        // Creates: 
        //      A principal menu.
        var directive = {
            bindToController: true,
            controller: menuController,
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: URL_VIEWS.components + 'menu/menu.view.html'
        };

        return directive;
    }
    
    /* @ngInject */
    function menuController() {

    }

})();