(function() {
    'use strict';

    angular.module('portfolioApp').factory('postEmailFormService',['$http', '$q', function($http, $q){

        var postEmailService = {}, postEmailServiceCall, deferred;
        postEmailService.postEmailFormServiceCall = function (emailData) {
            deferred = $q.defer();
            postEmailServiceCall = $http({
                url: '/postEmail',
                method:'POST',
                data: emailData,
                headers:{'Content-Type':'application/json'}
            }).success(function(response){
                deferred.resolve(response);
            }).error(function(response){
                deferred.reject(response);
            });
            return deferred.promise;
        };
        return postEmailService;
    }]);
})();