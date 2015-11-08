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


            var baseDir = "/img/badges/";
            $scope.badges = [{
                "file": baseDir + "badge1.png",
                "name": "Climed a mountain",
                "achieved" : true
            },{
                "file": baseDir + "badge2.png",
                "name": "Climed a mountain",
                "achieved" : true
            },{
                "file": baseDir + "badge3.png",
                "name": "Climed a mountain",
                "achieved" : true
            },{
                "file": baseDir + "badge 4.png",
                "name": "Climed a mountain",
                "achieved" : true
            },{
                "file": baseDir + "badge 5.png",
                "name": "Climed a mountain",
                "achieved" : true
            },{
                "file": baseDir + "badge 6.png",
                "name": "Climed a mountain",
                "achieved" : true
            }, {
                "file": baseDir + "badge 7.png",
                "name": "Climed a mountain",
                "achieved" : false
            },{
                "file": baseDir + "badge3.png",
                "name": "Climed a mountain",
                "achieved" : false
            },{
                "file": baseDir + "badge 6.png",
                "name": "Climed a mountain",
                "achieved" : false
            },{
                "file": baseDir + "badge1.png",
                "name": "Climed a mountain",
                "achieved" : false
            } ];

        }
]);