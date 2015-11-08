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
        '$scope', '$mdDialog', '$http',
        function ($scope, $mdDialog, $http) {

            $scope.imgUrl = "https://pbs.twimg.com/profile_images/651641074373427200/fkGcfovZ.jpg";
            $scope.name = "Pascal";
            $scope.stats = {
                "continents": 3,
                "countries": 8,
                "trips": 12,
                "miles": 7000
            };


            var baseDir = "/img/badges/";
            $scope.badges = [{
                    "file": baseDir + "badge1.png",
                    "name": "Mountaineer",
                    "achieved": true
            }, {
                    "file": baseDir + "badge2.png",
                    "name": "Art Lover",
                    "achieved": true
            }, {
                    "file": baseDir + "badge4.png",
                    "name": "Extreme Sportsman",
                    "achieved": true
            },
                {
                    "file": baseDir + "badge3.png",
                    "name": "7 Wonders",
                    "achieved": false
            }, {
                    "file": baseDir + "badge6.png",
                    "name": "Fly High",
                    "achieved": false
            }];
            
            
            $scope.saveDream = function() {
                $scope.user.dream = '';
                 $scope.badges.push({
                            "file": baseDir + "badge5.png",
                            "name": "Diver",
                            "achieved": false
                        });
            }


            $scope.showAddDream = function (ev) {
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: '/modules/core/views/adddream.template.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                    .then(function (answer) {
                        $scope.status = answer;
                        $scope.badges.push({
                            "file": baseDir + "badge5.png",
                            "name": "Diving Tour",
                            "achieved": false
                        });
                        console.log(answer);
                    }, function () {
                        $scope.status = undefined;
                    });
            };


              var stubhub = {
                req: {
                 method: 'GET',
                 headers: {
                    'Authorization': 'Bearer 2xMlMJxbOYHJG65FWNs5QYhNLYQa',
                  'Content-Type': 'application / json',
                  'Accept': 'application / json'
                 }
                },
                getEventDetails: function (venueId, callback) {
                  stubhub.req.params = {};
                  stubhub.req.url = 'https://api.stubhub.com//catalog/events/v2/' + venueId,
                  $http(stubhub.req).then(callback);
                },
                getVenueDetails: function (eventId, callback) {
                  stubhub.req.params = {};
                  stubhub.req.url = 'https://api.stubhub.com//catalog/venues/v2/' + eventId,
                  $http(stubhub.req).then(callback);
                },
                getTicketDetails: function (ticketlistingId, callback) {
                  stubhub.req.params = {};
                  stubhub.req.url = 'https://api.stubhub.com//inventory/listings/v1/' + ticketlistingId,
                  $http(stubhub.req).then(callback);
                },
                getEvents: function (parameter, callback) {
                  stubhub.req.params = parameter;
                  stubhub.req.url = 'https://api.stubhub.com//search/catalog/events/v3',
                  $http(stubhub.req).then(function(result){
                    return callback(result.data.events);
                  });
          });
        } 
      };
      stubhub.getEvents({country: 'Thailand'}, function(events){
        if (events[0]) {
            console.log(); 
            $scope.eventName = events[0].name;
            $scope.date = events[0].eventDateLocal;
            $scope.time = events[0].eventDateLocal;
        }
      });
      stubhub.getEventDetails(9409916, function(eventDetails){
        // console.log(eventDetails);
      });
      stubhub.getVenueDetails(213787, function(venueDetails){
        // console.log(venueDetails);
      });



        }
]);




function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.save = function () {
        $mdDialog.hide($scope.user.dream);
    };
}