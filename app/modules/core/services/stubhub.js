'use strict';

/**
 * @ngdoc service
 * @name core.Services.Stubhub
 * @description Stubhub Factory
 */
angular
    .module('core')
    .factory('Stubhub', ['$http',
        function ($http) {
            var baseUrl = 'https://api.stubhub.com/',
                apiKey = '2xMlMJxbOYHJG65FWNs5QYhNLYQa';

            var glob = {
                /**
                 * @ngdoc function
                 * @name core.Services.Stubhub#method1
                 * @methodOf core.Services.Stubhub
                 * @return {boolean} Returns a boolean value
                 */
                getName: function (name, callback) {

                    $http({
                        method: 'GET',
                        url: baseUrl + "search/catalog/events/v3?name=" + name,
                        headers: {
                            'Authorization': 'Bearer 2xMlMJxbOYHJG65FWNs5QYhNLYQa',
                            'Content-Type': 'application / json',
                            'Accept': 'application / json'
                        }
                    }).then(function successCallback(response) {
                        console.log("success name")
                            // manipulate data here
                            // extract locations
                            //eventid
                            //category
                        var sendout = [];
                        var data = response['data'];

                        var i;
                        for (i = 0; i < data.events.length; i++) {
                            //extract locations
                            sendout.push({
                                "venue": data.events[i].venue,
                                "event_id": data.events[i].id,
                                "name": data.events[i].name
                            });
                        }
                        callback(sendout);
                    }, function errorCallback(response) {
                        console.log("error name");

                    });
                },

                /**
                 * @ngdoc function
                 * @name core.Services.Stubhub#method2
                 * @methodOf core.Services.Stubhub
                 * @return {boolean} Returns a boolean value
                 */
                method2: function () {
                    return false
                }
            };
            return glob;
            }
    ]);