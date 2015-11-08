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
                "file": baseDir + "badge 4.png",
                "name": "Extreme Sport",
                "achieved": true
            },
             {
                "file": baseDir + "badge3.png",
                "name": "7 Wonders",
                "achieved": false
            }, {
                "file": baseDir + "badge 5.png",
                "name": "Diving Tour",
                "achieved": false
            }];


            $scope.showAddDream = function (ev) {
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: '/modules/core/views/adddream.template.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                    .then(function (answer) {
                        $scope.status =  answer;
                        console.log(answer);
                    }, function () {
                        $scope.status = undefined;
                    });
            };
        }
]);



function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.save = function() {
    $mdDialog.hide($scope.user.dream);
  };
}