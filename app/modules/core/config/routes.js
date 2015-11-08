'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            /**
             * @ngdoc event
             * @name core.config.route
             * @eventOf core.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the path is `'/'`, route to login
             * - When the state is `'profil'`, route to profil
             * - When the state is `'map'`, route to map
             *
            */
            $stateProvider
                .state('map', {
                    url: '/map',
                    templateUrl: 'modules/core/views/map.html',
                    controller: 'MapController'
                }).
            state('login', {
                    url: '/',
                    templateUrl: 'modules/core/views/login.html',
                    controller: 'LoginController'
                })

			    
			     .state('dreamlist', {
                    url: '/dreamlist',
                    templateUrl: 'modules/core/views/dreamlist.html',
                    controller: 'DreamlistController'
                  })

            .state('profile', {
                    url: '/profile',
                    templateUrl: 'modules/core/views/profile.html',
                    controller: 'ProfileController'
                });
            }
    ]);
