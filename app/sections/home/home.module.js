(function () {
    'use strict';
    angular
        .module('myApp.home', ['ui.bootstrap'])
        .controller('homeController', homeController);

    homeController.$inject = [];

    function homeController() {

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

        return vm;
    }

})();