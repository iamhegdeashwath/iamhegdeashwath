(function () {
    'use strict';
    angular.module('portfolioApp', [
        'ngAnimate',
        'ngTouch',
        'ngAria',
        'ui.bootstrap',
        'ui.router',
        'ngMessages',
        'uiGmapgoogle-maps',
        'nemLogging',
        'toaster'
    ]).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller:'HomeController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller:''
            })
            .state('skills', {
                url: '/skills',
                templateUrl: 'views/skills.html',
                controller: ''
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'views/projects.html',
                controller: 'ProjectsController'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'ContactController'
            })
            .state('postEmail', {
                url: '/postEmail'
            });
        $locationProvider.html5Mode(true);
    }).run(["$rootScope", "$anchorScroll", '$uibModalStack', '$browser', '$location', '$window', function ($rootScope, $anchorScroll, $uibModalStack, $browser, $location, $window) {
        $browser.baseHref = function () { return "/" };
        $window.ga('create', 'UA-80990628-1', 'auto');
        $rootScope.$on("$stateChangeSuccess", function () {
            $anchorScroll();
            $window.ga('send', 'pageview', $location.path());
        });
        $rootScope.$on('$stateChangeStart', function (event) {
            var top = $uibModalStack.getTop();
            if (top) {
                $uibModalStack.dismiss(top.key);
            }
        });
    }]);
})();