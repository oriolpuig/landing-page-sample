(function () {
    'use strict';

    angular.module('myApp')
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                // any unknown URLS go to 404
                $urlRouterProvider.otherwise('/404');
                // no route goes to index
                $urlRouterProvider.when('', '/');
                // use a state provider for routing

                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'app/sections/home/home.view.html',
                        controller: "homeController",
                        controllerAs: 'home'
                    })
                    .state('about', {
                        url: '/about',
                        templateUrl: 'app/sections/about/about.view.html',
                        controller: "aboutController",
                        controllerAs: 'about'
                    })
                    .state('blog', {
                        url: '/blog',
                        templateUrl: 'app/sections/blog/blog.view.html',
                        controller: "blogController",
                        controllerAs: 'blog'
                    })
                    .state('404', {
                        url: '/404',
                        templateUrl: 'app/shared/404.html'
                    });
            }]);

})();