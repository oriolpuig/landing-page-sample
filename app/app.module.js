(function () {
    'use strict';
    angular
        .module('myApp',
            [
                'ngSanitize',
                'ui.router',
                'ui.materialize',

                'myApp.home',
                'myApp.about',
                'myApp.blog',

                'myApp.components',
                'myApp.services'])
        .constant("URL_HELPER", {
            "API_URL": "http://localhost:3000/"
        })
        .constant('URL_VIEWS', {
            "components": '/app/components/'
        });

})();