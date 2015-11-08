'use strict';

describe('Controller: DreamlistController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var DreamlistController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        DreamlistController = $controller('DreamlistController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
