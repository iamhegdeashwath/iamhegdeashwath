(function(){
    'use strict';

    angular.module('portfolioApp').controller('HomeController', ['$scope',function($scope){
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'images/carousel_images/image1.JPG',
                text: 'image1',
                id: currIndex++
            });
            slides.push({
                image: 'images/carousel_images/image2.JPG',
                text: 'image2',
                id: currIndex++
            });
            slides.push({
                image: 'images/carousel_images/image3.JPG',
                text: 'image3',
                id: currIndex++
            });
            slides.push({
                image: 'images/carousel_images/image4.JPG',
                text: 'image4',
                id: currIndex++
            });
        };

        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 1; i++) {
            $scope.addSlide();
        }

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }
            return array;
        }
    }]);
})();
