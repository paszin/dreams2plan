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
        '$scope',
        function($scope) {
			
			$scope.dreams = 
				[{
					title:"Dubai",
					imagePath:"../../../dubai.jpg",
					content:"Dubai sits on a golden sandy coastline in the Arabian Gulf, where the warm azure waves of the sea meet the desert"
				 },
				 {
					title:"Great Wall Of China",
					imagePath:"../../../great_wall_china.jpg",
					content:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe."
				 },
				
				 {
					title:"Great Wall Of China",
					imagePath:"../../../great_wall_china.jpg",
					content:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe."
				 },

				 {
					title:"Great Wall Of China",
					imagePath:"../../../great_wall_china.jpg",
					content:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe."
				 },

				 {
					title:"Great Wall Of China",
					imagePath:"../../../great_wall_china.jpg",
					content:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe."
				 },

				 {
					title:"Great Wall Of China",
					imagePath:"../../../great_wall_china.jpg",
					content:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe."
				 },

				 {
					title:"Great Wall Of China",
					imagePath:"../../../great_wall_china.jpg",
					content:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe."
				 }
			    ]
     
        }
]);
