'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.LoginController
 * @description LoginController
 * @requires ng.$scope
*/
angular
    .module('core')
    .controller('LoginController', [
        '$rootScope', '$scope',
        function($rootScope, $scope) {
            
            $scope.user = {};
            $scope.user.name = "Pascal";
            $scope.user.password = "undefined";
            
            $scope.login = function() {
                
                $rootScope.selectedIndex = 1;
            }
                

        }
]);
