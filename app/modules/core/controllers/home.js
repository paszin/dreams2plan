'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('HomeController', ['$scope',
        function($scope) {
            
            var viewsFolder = "/modules/core/views/"
            $scope.tabs = [
                {
                    title: 'Dreams2Plan',
                    content: viewsFolder + "login.html",
                    controller: undefined,
                    callback: undefined
                    },
                {
                    title: 'You',
                    content: viewsFolder + "profile.html",
                    controller: "ProfileController",
                    callback: 2,
                    },
                {
                    title: 'Destinations',
                    content: viewsFolder + "dreamlist.html",
                    call: undefined,
                    callback: undefined
                    },
                {
                    title: 'Map',
                    content: viewsFolder + "map.html",
                    call: undefined,
                    callback: undefined
                    }
        ];

            $scope.selectedIndex = 0;
          

        }
    ]);
