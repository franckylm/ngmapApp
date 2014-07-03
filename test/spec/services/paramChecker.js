'use strict';

describe('Service: ParamHelperService', function () {

  // load the service's module
  beforeEach(module('ngmapApp'));

  var paramHelperService;

  // Initialize the service
  beforeEach(inject(function (ParamHelperService) {
        paramHelperService = ParamHelperService;
  }));


  it('should validate radiusParams', function () {
      var validRadiuses = [
        '50',
        '56789'
      ];
      var invalidRadiuses = [
        '',
        null,
        '-1'
      ];
      for (var i = 0; i < validRadiuses.length; i++) {
        expect(paramHelperService.checkCircleRadius(validRadiuses[i])).toBe(true);
      }
      for (var j = 0; j < invalidRadiuses.length; j++) {
        expect(paramHelperService.checkCircleRadius(invalidRadiuses[j])).toBe(false);
      }
  });

  it('should handle different values of latitudes', function () {
      var validLatitudes = [
        '-90',
        '49'
      ];
      var invalidLatitudes = [
        '',
        null,
        undefined,
        'fakevalue'
      ];
      for (var i = 0; i < validLatitudes.length; i++) {
        expect(paramHelperService.isValidLatitude(validLatitudes[i])).toBe(true);
      }
      for (var j = 0; j < invalidLatitudes.length; j++) {
        expect(paramHelperService.isValidLatitude(invalidLatitudes[j])).toBe(false);
      }
  });

  it('should handle different values of longitude', function () {
      var validLongitudes = [
        '-150',
        '49'
      ];
      var invalidLongitudes = [
        '',
        null,
        undefined,
        'fakevalue'
      ];
      for (var i = 0; i < validLongitudes.length; i++) {
        expect(paramHelperService.isValidLongitude(validLongitudes[i])).toBe(true);
      }
      for (var j = 0; j < invalidLongitudes.length; j++) {
        expect(paramHelperService.isValidLongitude(invalidLongitudes[j])).toBe(false);
      }
  });

 it('should validate circle center coordinates', function () {
      var validCoordinates = [
        '45,-70'
      ];
      var invalidCoordinates = [
        '',
        null,
        undefined,
        'fakevalue',
        '100,-50'
      ];
      for (var i = 0; i < validCoordinates.length; i++) {
        expect(paramHelperService.isValidCenterCoordinates(validCoordinates[i])).toBe(true);
      }
      for (var j = 0; j < invalidCoordinates.length; j++) {
        expect(paramHelperService.isValidCenterCoordinates(invalidCoordinates[j])).toBe(false);
      }
  });

 it('should render formated circle coordinates', function () {
      var coordinates = '45,-70';
      var result = paramHelperService.getConvertedCoordinates(coordinates, ',');
      expect(result.latitude).toBe(45);
      expect(result.longitude).toBe(-70);
      expect(paramHelperService.getConvertedCoordinates('45,fake')).toBe(null);
  });

 it('should validate polygon string', function () {
      var polyString = '50.00$-80.00+30.00$-120.00+20.00$-95.00';
      var fakepolyString = '50.00$-80.00+30.00$-120.00+20.00-95.00';
      expect(paramHelperService.isValidPolygonString(polyString)).toBe(true);
      expect(paramHelperService.isValidPolygonString(fakepolyString)).toBe(false);
      expect(paramHelperService.isValidPolygonString('fake')).toBe(false);
  });

 it('should create polygon', function () {
      var polyString = '50.00$-80.00+30.00$-120.00+20.00$-95.00';
      var result = paramHelperService.getPolygonCoordinates(polyString);
      expect(result.length).toBe(3);
      expect(result[0].latitude).toBe(50.00);
      expect(result[0].longitude).toBe(-80.00);
      expect(result[1].latitude).toBe(30.00);
      expect(result[1].longitude).toBe(-120.00);
      expect(result[2].latitude).toBe(20.00);
      expect(result[2].longitude).toBe(-95.00);
      expect(paramHelperService.getPolygonCoordinates('fake')).toBe(null);
  });
  
});