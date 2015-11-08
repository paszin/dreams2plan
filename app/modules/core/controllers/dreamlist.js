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
					content:"",
					visited:"true",
                    options: ["Opt1", "Opt2", "Opt3"]

				 },

				 {
					title:"Great Wall Of China",
					imagePath:"../img/great_wall_china.jpg",
					content:"",
					visited:"false"
				 },

				 {
					title:"Yosemite",
					imagePath:"../img/Yosemite.jpg",
					content:"",
					visited:"false"
				 },

				 {
					title:"Paris Art Gallery",
					imagePath:"../img/Paris.jpg",
					content:"",
					visited:"false"
				 },

				 {
					title:"Portugal",
					imagePath:"../img/Portugal.jpg",
					content:"",
				 	visited:"false"
				 },


				 {
					title:"The Nevis, Queenstown, New Zealand",
					imagePath:"../img/Bungee_Jumping.jpg",
					content:"",
				 	visited:"true"
				 },

				 {
					title:"Boom,Belgium",
					imagePath:"../img/tomorrowland.jpg",
					content:"",
				 	visited:"false"
				 }

			    ]

        }
]);
