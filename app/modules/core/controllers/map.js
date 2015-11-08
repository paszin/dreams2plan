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
            $scope.colorRange = ["#11aa33",  "#FFEDA0", "#0499f2"];
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
                    "countryCode": "THA",
                    "value": 50
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
                    "countryCode": "IND",
                    "value": 100
		        }
		    ];
        }
]);