(function () {
    'use strict';
    angular
        .module('myApp.events', ['ui.bootstrap'])
        .controller('eventsController', eventsController);

    eventsController.$inject = ['eventsService', 'NgMap'];

    function eventsController(eventsService, NgMap) {

        var vm = this;

        /* Meetup Event */
        vm.events = [];
        vm.events = [{
            "venue": {
                "lat": 0,
                "lon": 0,
                "name": ""
            },
            "id": 226832398,
            "name": "Event name",
            "yes_rsvp_count": 46,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.",
            "status": "past",
            "image": "http://placehold.it/500x300"
        },
            {
                "venue": {
                    "lat": 0,
                    "lon": 0,
                    "name": ""
                },
                "id": 226832398,
                "name": "Event name",
                "yes_rsvp_count": 54,
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.",
                "status": "past",
                "image": "http://placehold.it/500x300"
            }];

        return vm;
    }

})();