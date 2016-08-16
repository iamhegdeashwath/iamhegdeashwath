(function() {
    'use strict';

    angular.module('portfolioApp').factory('emailPhoneCheckService',['$http', '$q', function($http, $q){

        var emailPhoneService = {}, emailExistenceServiceCall, phoneNumberServiceServiceCall, deferred;
        emailPhoneService.emailExistenceCheckServiceCall = function (access_key, emailAddress) {
            deferred = $q.defer();
            emailExistenceServiceCall = $http({
                url: 'https://apilayer.net/api/check?access_key=' + access_key + '&email=' + emailAddress,
                method:'POST',
                data: '',
                headers:{'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(response){
                deferred.resolve(response);
            }).error(function(response){
                deferred.reject(response);
            });
            return deferred.promise;
        };

        emailPhoneService.phoneNumberCheckServiceCall = function (access_key, phoneNumber) {
            deferred = $q.defer();
            phoneNumberServiceServiceCall = $http({
                url: 'http://apilayer.net/api/validate?access_key=' + access_key + '&number=1' + phoneNumber,
                method:'POST',
                data: '',
                headers:{'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).success(function(response){
                deferred.resolve(response);
            }).error(function(response){
                deferred.reject(response);
            });
            return deferred.promise;
        };

        return emailPhoneService;
    }]);
})();