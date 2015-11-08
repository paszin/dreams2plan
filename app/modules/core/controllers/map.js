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
        function($scope, $timeout) {
$scope.valueRange = [0,100];
    $scope.colorRange = ["#F03B20", "#FFEDA0"];
    $scope.dimension = 600;
    $scope.mapWidth = 1250;
    $scope.descriptiveText = 'failure %';
    $scope.countryFillColor = "#aaa";
    $scope.countryBorderColor = "#fff";
    $scope.worldData = [
        {
          "countryCode": "AFG",
          "value": 0
        },
        {
          "countryCode": "USA",
          "value": 100
        },
        {
          "countryCode": "CAN",
          "value": 100
        },
        {
          "countryCode": "ISR",
          "value": 0
        },
        {
          "countryCode": "NLD",
          "value": 0
        }
      ];
     $timeout(function(){
     	
     	$scope.worldData = [
        {
          "countryCode": "AFG",
          "value": 100
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
