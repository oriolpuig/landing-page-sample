(function () {
    'use strict';
    angular
        .module('myApp.blog', [])
        .controller('blogController', blogController);

    blogController.$inject = ['postsService'];

    function blogController(postsService) {

        var vm = this;
        var posts = vm.posts = [];
        var error = vm.error = [];

        postsService.getAllPosts().then(
            function (data) {
                vm.posts = data;
            },
            function (err) {
                error = err;
                //TODO: Lauch error message.
            });

        vm.getCategories = function (list) {
            var result = [];

            for (var i = 0; i < list.length; i++) {
                result.push(list[i].name);
            }

            return result.join(", ");
        };

        vm.getImageSrc = function (src) {
            return (src !== undefined ? src : 'http://placehold.it/900x300');
        }

        return vm;
    }

})();