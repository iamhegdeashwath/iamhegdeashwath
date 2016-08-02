(function(){
    'use strict';

    angular.module('portfolioApp').controller('ProjectsController', ['$scope', '$uibModal', function($scope, $uibModal){

        $scope.animationsEnabled = true;

        $scope.openBbTransactModal = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/modal_templates/bbTransact.template.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                    }
                },
                backdrop: 'static'
            });
        };

        $scope.openEgenModal = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/modal_templates/egen.template.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                    }
                },
                backdrop: 'static'
            });
        };

        $scope.openEdlaModal = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/modal_templates/edla.template.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                    }
                },
                backdrop: 'static'
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }]);

    angular.module('portfolioApp').controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);

})();
