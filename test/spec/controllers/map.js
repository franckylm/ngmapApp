'use strict';

describe('Controller: MapCtrl', function () {

  // load the controller's module
  beforeEach(module('ngmapApp'));

  var MapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapCtrl = $controller('MapCtrl', {
      $scope: scope
    });
  }));

  it('should attach....', function () {

    var stringCoordinates = '50.00$-80.00+30.00$-120.00+20.00$-95.00';
    var expectedResult = [
      {latitude: 50.00, longitude: -80.00},
      {latitude: 30.00, longitude: -120.00},
      {latitude: 20.00, longitude: -95.00}
    ];
    //expect(scope.formatPolygonString(stringCoordinates).length).toBe(3);
    
  });
});
