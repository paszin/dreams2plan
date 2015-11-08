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
                    dreams: ["Go to the top of Burj Khalifa", "Visit the Ferrari World", "Go for a desert safari"],
                    wiki: "https://en.wikipedia.org/wiki/Dubai"

				 },

                {
                    title: "Great Wall Of China",
                    imagePath: "../img/great_wall_china.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["Participate in the Great Wall Marathon", "Go for paragliding"],
                    wiki: "https://en.wikipedia.org/wiki/Great_Wall_of_China"
				 },

                {
                    title: "Yosemite",
                    imagePath: "../img/Yosemite.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["Go hiking", "Horse riding"],
                    wiki: "https://en.wikipedia.org/wiki/Yosemite_National_Park"
				 },

                {
                    title: "Paris Art Gallery",
                    imagePath: "../img/Paris.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["Visit the art gallery", "Visit the Eiffel Tower", "Visit the Musee du Louvre"],
                    wiki: "https://en.wikipedia.org/wiki/Category:Art_museums_and_galleries_in_Paris"
				 },

                {
                    title: "Portugal",
                    imagePath: "../img/Portugal.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["Visit Lisbon Oceanarium", "Visit the National Palace of Pena", "Visit the Ponta da Piedade"],
                    wiki: "https://en.wikipedia.org/wiki/Portugal"
				 },


                {
                    title: "The Nevis, Queenstown, New Zealand",
                    imagePath: "../img/Bungee_Jumping.jpg",
                    content: "",
                    visited: "true",
                    dreams: ["Go Bungee Jumping"],
                    wiki: "https://en.wikipedia.org/wiki/Nevis_Highwire_Platform"
				 },

                {
                    title: "Boom, Belgium",
                    imagePath: "../img/tomorrowland.jpg",
                    content: "",
                    visited: "false",
                    dreams: ["Attend Tomorrowland"],
                    wiki: "https://en.wikipedia.org/wiki/Tomorrowland_(festival)"
                },

                {
                    title: "Tahiti",
                    imagePath: "../img/tahiti.png",
                    content: "",
                    visited: "false",
                    dreams: [{name: "Party on a private yacht", img:'/img/badges/badge5.png'}, {name:"Scuba dive", img:'/img/badges/badge5.png'}],
                    wiki: "https://en.wikipedia.org/wiki/Tahiti"
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
