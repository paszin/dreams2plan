'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.MapController
 * @description MapController
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('MapController', [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
            $scope.valueRange = [0, 50, 100];
            $scope.colorRange = ["#F03B20","#0499f2", "#FFEDA0"];
            $scope.dimension = 600;
            $scope.mapWidth = 1250;
            $scope.descriptiveText = 'visited at';
            $scope.countryFillColor = "#aaa";
            $scope.countryBorderColor = "#fff";
            $scope.worldData = [
                {
                    "countryCode": "PRT",
                    "value": 0
        },
                {
                    "countryCode": "USA",
                    "value": 100
        },
                {
                    "countryCode": "NZL",
                    "value": 100
        },
                {
                    "countryCode": "ZAF",
                    "value": 0
        },
                {
                    "countryCode": "KEN",
                    "value": 0
        },
        {
                    "countryCode": "DEU",
                    "value": 0
        },
        {
                    "countryCode": "FRA",
                    "value": 0
        },
        {
                    "countryCode": "BEL",
                    "value": 0
        },

        {
                    "countryCode": "BEL",
                    "value": 100
        },


      ];
            $timeout(function () {

                $scope.worldData = [
                    {
                        "countryCode": "AFG",
                        "value": 50
        },
                    {
                        "countryCode": "USA",
                        "value": 0
        },
                    {
                        "countryCode": "CAN",
                        "value": 0
        },
                    {
                        "countryCode": "ISR",
                        "value": 100
        },
                    {
                        "countryCode": "NLD",
                        "value": 100
        }
      ];
            }, 5000);
        }
]);