(function () {
    'use strict';

    angular
        .module('myApp.components')
        .directive('csFooter', footerDirective);

    footerDirective.$inject = ['URL_VIEWS'];

    function footerDirective(URL_VIEWS) {
        // Usage: 
        //      <cs-footer></cs-footer>
        // Creates: 
        //      A generic footer.
        var directive = {
            bindToController: true,
            controller: footerController,
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: URL_VIEWS.components + 'footer/footer.view.html'
        };

        return directive;
    }
    
    /* @ngInject */
    function footerController() {

    }

})();