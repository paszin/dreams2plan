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

            $urlRouterProvider.otherwise('/home');

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
            .state('home', {
                    url: '/home',
                    templateUrl: 'modules/core/views/home.html',
                    controller: 'HomeController'
            })
                .state('demo', {
                    url: '/share',
                    templateUrl: 'modules/core/views/demo.html'

            })
        }
    ]);
