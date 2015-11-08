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
        '$scope', '$mdDialog',
        function ($scope, $mdDialog) {

            $scope.imgUrl = "https://pbs.twimg.com/profile_images/651641074373427200/fkGcfovZ.jpg";
            $scope.name = "Pascal";
            $scope.stats = {
                "continents": 3,
                "countries": 8,
                "trips": 12,
                "miles": 7000
            };


            var baseDir = "/img/badges/";
            $scope.badges = [{
                    "file": baseDir + "badge1.png",
                    "name": "Mountaineer",
                    "achieved": true
            }, {
                    "file": baseDir + "badge2.png",
                    "name": "Art Lover",
                    "achieved": true
            }, {
                    "file": baseDir + "badge4.png",
                    "name": "Extreme Sportsman",
                    "achieved": true
            },
                {
                    "file": baseDir + "badge3.png",
                    "name": "7 Wonders",
                    "achieved": false
            }, {
                    "file": baseDir + "badge6.png",
                    "name": "Fly High",
                    "achieved": false
            }];
            
            
            $scope.saveDream = function() {
                $scope.user.dream = '';
                 $scope.badges.push({
                            "file": baseDir + "badge5.png",
                            "name": "Diver",
                            "achieved": false
                        });
            }


            $scope.showAddDream = function (ev) {
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: '/modules/core/views/adddream.template.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                    .then(function (answer) {
                        $scope.status = answer;
                        $scope.badges.push({
                            "file": baseDir + "badge5.png",
                            "name": "Diving Tour",
                            "achieved": false
                        });
                        console.log(answer);
                    }, function () {
                        $scope.status = undefined;
                    });
            };
        }
]);




function DialogController($scope, $mdDialog) {
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