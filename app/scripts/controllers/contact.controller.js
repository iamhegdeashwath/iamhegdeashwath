(function(){
    'use strict';

    angular.module('portfolioApp').controller('ContactController', ['$scope','postEmailFormService','toaster', function($scope, postEmailFormService, toaster){
        $scope.map = {
            center: {
                latitude: 41.831924,
                longitude: -87.640899
            },
            zoom: 15
        };
        $scope.marker = {
            id: 0,
            coords: {
                latitude:  41.831924,
                longitude: -87.640899
            },
            options: {
                draggable: false,

                title: 'Ashwath Suresh Hegde',
                animation: 2 // 1: BOUNCE, 2: DROP
            }
        };

        $scope.processForm = function (formData) {
            if ($scope.contactForm.$valid) {
                var emailData = ({
                    to: 'hegde.ashwath1@gmail.com',
                    contactName: formData.contactName,
                    contactEmail: formData.contactEmail,
                    contactPhone: formData.contactPhone,
                    contactMessage: formData.contactMessage
                });
                postEmailFormService.postEmailFormServiceCall(emailData).then(function (response){
                        if(response) {
                            $scope.pop();
                            $scope.contactForm.$setPristine();
                            $scope.formData = {};
                        }
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            else {
                toaster.pop('error', "Sorry :-(", "Please complete the form.");
            }
        };

        $scope.pop = function(){
            toaster.pop('note', "Thank you!", "Your Message has been sent.");
        };
    }]);
})();
