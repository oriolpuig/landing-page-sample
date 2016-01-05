(function () {
    'use strict';
    angular
        .module('myApp',
            [
                'ngSanitize',
                'ui.router',
                'ui.materialize',
                'ngMap',

                'myApp.home',
                'myApp.about',
                'myApp.blog',
                'myApp.events',
                'myApp.event',

                'myApp.components',
                'myApp.services'])
        .constant("URL_HELPER", {
            "API_URL": "http://localhost:3000/"
        })
        .constant('URL_VIEWS', {
            "components": '/app/components/'
        });

})();