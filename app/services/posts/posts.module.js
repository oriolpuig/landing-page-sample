(function () {
    'use strict';

    angular
        .module('myApp.services')
        .factory('postsService', postsService);

    postsService.$inject = ['$q', '$http', 'URL_HELPER'];
    function postsService($q, $http, URL_HELPER) {
        var service = {
            posts: {},
            selectedPosts: {},
            getAllPosts: getAll
        };


        service.getAllPosts();

        return service;

        ////////////////
        function getAll() {
            var defer = $q.defer();

            $http.get('./db/db.json')
                .success(function (data) {
                    service.posts = data.posts;
                    defer.resolve(data.posts);
                }).error(function (error) {
                    service.posts = [];
                    defer.reject(error);
                });

            return defer.promise;
        }
    }
})();