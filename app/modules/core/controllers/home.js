'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('HomeController', ['$rootScope', '$scope', '$log',
        function ($rootScope, $scope, $log) {

            var viewsFolder = "/modules/core/views/"
            $scope.tabs = [
                {
                    title: 'Dreams2Plan',
                    content: viewsFolder + "login.html",

                    },
                {
                    title: 'You',
                    content: viewsFolder + "profile.html",


                    },
                {
                    title: 'Dreambox',
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

            $rootScope.selectedIndex = 0;

            $rootScope.$watch('selectedIndex', function (current, old) {
                console.log("selected");
                
            });


        }
    ]);