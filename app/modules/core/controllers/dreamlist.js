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
					title:"Yosemite",
					imagePath:"../../../Yosemite.jpg",
					content:"Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome."
				 },

				 {
					title:"Paris Art Gallery",
					imagePath:"../../../Paris.jpg",
					content:"Paris has long been synonymous with burgeoning arts and cultural flair. With such a wealth of public galleries, creative events and white spaces, no selection of the top 10 contemporary art galleries can be comprehensive."
				 },

				 {
					title:"",
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
