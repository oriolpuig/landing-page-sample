(function () {
    'use strict';
    angular
        .module('myApp.about', [])
        .controller('aboutController', aboutController);

    aboutController.$inject = [];

    function aboutController() {

        var vm = this;

        return vm;
    }

})();