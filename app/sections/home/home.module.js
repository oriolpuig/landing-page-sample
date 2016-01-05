(function () {
    'use strict';
    angular
        .module('myApp.home', ['ui.bootstrap'])
        .controller('homeController', homeController);

    homeController.$inject = ['twitterService', 'eventsService', 'NgMap'];

    function homeController(twitterService, eventsService, NgMap) {

        var vm = this;

        /* Slides settings */
        vm.Interval = 5000;
        vm.noWrapSlides = false;
        var slides = vm.slides = [];

        slides.push(
            {
                image: 'http://placehold.it/1900x1080&text=Slide One',
                text: 'Caption 1'
            },
            {
                image: 'http://placehold.it/1900x1080&text=Slide Two',
                text: 'Caption 2'
            },
            {
                image: 'http://placehold.it/1900x1080&text=Slide Three',
                text: 'Caption 3'
            });


        /* Retrieve lasts tweets */
        twitterService.getAllTweets().then(
            function (data) {
                vm.tweets = data;
            },
            function (error) {
                vm.tweets = [];
            });
            
        /* Meetup Event */
        vm.event = eventsService.eventDefault;
        vm.event = {
            "venue": {
                "lat": 0,
                "lon": 0,
                "name": ""
            },
            "id": 226832398,
            "name": "Event name",
            "yes_rsvp_count": 46,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.",
            "status": "past"
        }
        // eventsService.getFirstEvent().then(
        //     function (data) {
        //         vm.event = data;
        //     },
        //     function (error) { }
        //     );

        return vm;
    }

})();