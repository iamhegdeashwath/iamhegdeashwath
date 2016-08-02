(function(){
    'use strict';

    angular.module('portfolioApp').directive('isActiveNav', [ '$location', function($location) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                scope.location = $location;
                scope.$watch('location.path()', function(currentPath) {
                    if(currentPath === element[0].attributes['href'].nodeValue) {
                        element.addClass('active');
                    } else {
                        element.removeClass('active');
                    }
                });
            }
        };
    }]);
})();
