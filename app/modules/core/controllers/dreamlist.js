'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.DreamlistController
 * @description DreamlistController
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('DreamlistController', [
        '$scope', '$mdDialog',
        function ($scope, $mdDialog) {

            $scope.dreams = [{
                    title: "Dubai",
                    imagePath: "../img/dubai.jpg",
                    content: "",
                    visited: "true",
                    dreams: ["huge tower", "Opt2", "Opt3"]

				 },

                {
                    title: "Great Wall Of China",
                    imagePath: "../img/great_wall_china.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["huge tower", "Opt3"],
                    price: 800
				 },

                {
                    title: "Yosemite",
                    imagePath: "../img/Yosemite.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["huge tower", "Opt2", "Opt3"],
                    price: 800
				 },

                {
                    title: "Paris Art Gallery",
                    imagePath: "../img/Paris.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["huge tower", "Opt2", "Opt3"],
                    price: 800
				 },

                {
                    title: "Portugal",
                    imagePath: "../img/Portugal.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["huge tower", "Opt2", "Opt3"],
                    price: 800
				 },


                {
                    title: "The Nevis, Queenstown, New Zealand",
                    imagePath: "../img/Bungee_Jumping.jpg",
                    content: "",
                    visited: "true",
                    dreams: ["huge tower", "Opt2", "Opt3"],
                    price: 800
				 },

                {
                    title: "Boom,Belgium",
                    imagePath: "../img/tomorrowland.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["huge tower", "Opt2", "Opt3"],
                    price: 800
				 }

			    ];


            $scope.showAdventure = function (adventure) {
                console.log(adventure);
                $mdDialog.show({
                        controller: AdventureController,
                        templateUrl: '/modules/core/views/showAdventure.template.html',
                        parent: angular.element(document.body),
                        clickOutsideToClose: true,
                        locals: {
                            adventure: adventure
                        }
                    })
                    .then(function (answer) {
                        $scope.status = answer;

                        console.log(answer);
                    }, function () {
                        $scope.status = undefined;
                    });
            };

        }
]);


function AdventureController($scope, $mdDialog, adventure) {
    $scope.adventure = adventure;
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.save = function () {
        $mdDialog.hide($scope.user.dream);
    };
}