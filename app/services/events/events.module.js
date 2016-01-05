(function () {
    'use strict';

    angular
        .module('myApp.services')
        .factory('eventsService', eventsService);

    eventsService.$inject = ['$q', '$http', 'URL_HELPER'];
    function eventsService($q, $http, URL_HELPER) {
        var service = {
            eventDefault: {
                venue: { lat: 0, lon: 0, name: '' }
            },
            events: {},
            currentEvent: {},
            getAllEvents: getAllEvents,
            getFirstEvent: getFirstEvent
        };

        service.getAllEvents();

        return service;

        ////////////////
        function getAllEvents() {
            var defer = $q.defer();

            if (service.events.length > 0) {
                defer.resolve(service.events);
            } else {
                $http.get('./db/db.json')
                    .success(function (data) {
                        service.events = data.events;
                        defer.resolve(data.events);
                    }).error(function (error) {
                        service.events = {};
                        defer.reject(error);
                    });
            }

            return defer.promise;
        }

        function getFirstEvent() {
            var defer = $q.defer();

            if (service.events.length > 0) {
                service.currentEvent = service.events[0];
                defer.resolve(service.currentEvent);
            } else {
                $http.get('./db/db.json')
                    .success(function (data) {
                        service.events = data.events;
                        service.currentEvent = service.events[0];
                        defer.resolve(service.currentEvent);
                    }).error(function (error) {
                        service.events = {};
                        service.currentEvent = {};
                        defer.reject(error);
                    });
            }

            return defer.promise;
        }
    }
})();