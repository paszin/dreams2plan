'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.NavbarController
 * @description NavbarController
 * @requires ng.$scope
*/
angular
    .module('core')
    .controller('NavbarController', [
        '$scope', 'Navbar',
        function($scope, Navbar) {
            //Navbar.setTitle("KitchenKitchen");

            $scope.Navbar = Navbar;

        }
]);