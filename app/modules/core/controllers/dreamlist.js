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
					imagePath:"../img/dubai.jpg",
					content:"Dubai sits on a golden sandy coastline in the Arabian Gulf, where the warm azure waves of the sea meet the desert",
					visited:"true",
                    options: ["O1", "Opt2", "Opt3"]
				 },

				 {
					title:"Great Wall Of China",
					imagePath:"../img/great_wall_china.jpg",
					content:"The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.",
					visited:"false"
				 },

				 {
					title:"Yosemite",
					imagePath:"../img/Yosemite.jpg",
					content:"Yosemite National Park is set within California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoias, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.",
					visited:"false"
				 },

				 {
					title:"Paris Art Gallery",
					imagePath:"../img/Paris.jpg",
					content:"Paris has long been synonymous with burgeoning arts and cultural flair. With such a wealth of public galleries, creative events and white spaces, no selection of the top 10 contemporary art galleries can be comprehensive.",
					visited:"false"
				 },

				 {
					title:"Portugal",
					imagePath:"../img/Portugal.jpg",
					content:"Spread over a string of seven hills north of the Rio Tejo (Tagus River) estuary, Lisbon presents an intriguing variety of faces to those who negotiate its switchback streets. In the oldest neighborhoods, stepped alleys whose street pattern dates back to Moorish times are lined with pastel-color houses decked with laundry.",
				 	visited:"false"
				 },


				 {
					title:"The Nevis, Queenstown, New Zealand",
					imagePath:"../img/Bungee_Jumping.jpg",
					content:"While its 43-metre drop might now be considered light on scares by serial thrill-seekers, the Kawarau's status as the place where it all began is undisputed. More than 650,000 people have taken the plunge from this historic suspension bridge, with many dipping their heads in the stunning turquoise waters below.",
				 	visited:"true"
				 },

				 {
					title:"Boom,Belgium",
					imagePath:"../img/tomorrowland.jpg",
					content:"While its 43-metre drop might now be considered light on scares by serial thrill-seekers, the Kawarau's status as the place where it all began is undisputed. More than 650,000 people have taken the plunge from this historic suspension bridge, with many dipping their heads in the stunning turquoise waters below.",
				 	visited:"false"
				 }

			    ]

        }
]);
