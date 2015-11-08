'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.ProfileController
 * @description ProfileController
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('ProfileController', [
        '$scope',
        function ($scope) {

            $scope.imgUrl = "https://pbs.twimg.com/profile_images/651641074373427200/fkGcfovZ.jpg";
            $scope.name = "Fabi";
            $scope.stats = {
                "continents": 2,
                "countries": 18,
                "trips": 13,
                "miles": 7000
            };


            var baseDir = "/img/badges/";
            $scope.badges = [{
                "file": baseDir + "badge1.png",
                "name": "Climed a mountain",
                "achieved": true
            }, {
                "file": baseDir + "badge2.png",
                "name": "Art lovers",
                "achieved": true
            }, {
                "file": baseDir + "badge4.png",
                "name": "Extreme Sport",
                "achieved": true
            },
             {
                "file": baseDir + "badge3.png",
                "name": "7 Wonders",
                "achieved": false
            }, {
                "file": baseDir + "badge5.png",
                "name": "Diving Tour",
                "achieved": false
            }];

        }
]);
