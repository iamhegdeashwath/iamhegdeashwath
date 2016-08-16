(function(){
    'use strict';

    angular.module('portfolioApp').controller('ContactController', ['$scope','emailPhoneCheckService','postEmailFormService','toaster', function($scope, emailPhoneCheckService, postEmailFormService, toaster){
        var email_access_key = '055b4c363c75c672f7987f337d0f0e09';
        var phone_access_key = '3fdeade8127e3f6fcca411282034f01a';
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

                emailPhoneCheckService.emailExistenceCheckServiceCall(email_access_key, emailData.contactEmail).then(function (response){
                    $scope.emailResponse = response;
                        emailPhoneCheckService.phoneNumberCheckServiceCall(phone_access_key, emailData.contactPhone).then(function (response){
                            $scope.phoneResponse = response;
                            if($scope.phoneResponse.valid === true && $scope.emailResponse.smtp_check === true) {
                                    postEmailFormService.postEmailFormServiceCall(emailData).then(function (response){
                                            if(response) {
                                                $scope.popThankYouMessage();
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
                                    if($scope.emailResponse.smtp_check !== true) {
                                        toaster.pop('error', 'Don\'t Try To Spam', "Give Correct Email Address");
                                    }
                                    if($scope.phoneResponse.valid !== true) {
                                        toaster.pop('error', 'Don\'t Try To Spam', "Give Correct Phone Number");
                                    }
                                }
                            },
                            function(error){
                                console.log(error);
                            }
                        );
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

        $scope.popThankYouMessage = function(){
            toaster.pop('note', "Thank you!", "Your Message has been sent.");
        };
    }]);
})();
