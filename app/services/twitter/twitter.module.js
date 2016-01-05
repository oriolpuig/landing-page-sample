(function () {
    'use strict';

    angular
        .module('myApp.services')
        .factory('twitterService', twitterService);

    twitterService.$inject = ['$q', '$http', 'URL_HELPER'];
    function twitterService($q, $http, URL_HELPER) {
        var service = {
            tweets: {},
            getAllTweets: getAllTweets
        };

        return service;

        ////////////////
        function getAllTweets() {
            var defer = $q.defer();

            $http.get('./db/db.json')
                .success(function (data) {
                    service.tweets = data.tweets;
                    defer.resolve(data.tweets);
                }).error(function (error) {
                    service.tweets = {};
                    defer.reject(error);
                });

            return defer.promise;
        }
    }
})();