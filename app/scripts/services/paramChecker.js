'use strict';

angular.module('ngmapApp').service('ParamHelperService', function() {
  return {
         checkCircleRadius: function(radiusString){
          var state = false;
          if(angular.isUndefined(radiusString) || radiusString === null){
              return state;
          }
          var convertedRadius = parseFloat(radiusString);
          if(!isNaN(convertedRadius) && convertedRadius>=0 ){
            state = true;
          }
          return state;
         },
         isValidCenterCoordinates: function(coordinateString){
            var state = false;
            if(angular.isUndefined(coordinateString) || coordinateString === null){
              return state;
            }
            var splitedString = coordinateString.split(',');
            if(this.isValidLatitude(splitedString[0]) && this.isValidLongitude(splitedString[1])){
              state = true;
            }
            return state;
         },
         isValidPolygonCoordinates: function(coordinateString){
            var state = false;
            if(angular.isUndefined(coordinateString) || coordinateString === null){
              return state;
            }
            var splitedString = coordinateString.split('$');
            if(this.isValidLatitude(splitedString[0]) && this.isValidLongitude(splitedString[1])){
              state = true;
            }
            return state;
         },
         isValidLatitude: function(latitudeString){
            var latitude =  parseFloat(latitudeString);
            var state = false;
            if(!isNaN(latitude) && (latitude >= -90 && latitude <= 90)){
                state = true;
            }
            return state;
         },
         isValidLongitude: function(longitudeString){
          var longitude =  parseFloat(longitudeString);
            var state = false;
            if(!isNaN(longitude) && (longitude >= -180 && longitude <= 180)){
                state = true;
            }
            return state;
         },
         isValidPolygonString: function(polygonString){
            var state = false;
            if(angular.isUndefined(polygonString) || polygonString === null){
              return state;
            }
            var splitedString = polygonString.split('+');
            for (var i = 0; i < splitedString.length; i++) {
                var adaptedString = splitedString[i].replace('$',',');
                state = this.isValidCenterCoordinates(adaptedString);
            }
            return state;
         },
         getConvertedCoordinates: function(stringCoordinates, separator){
            var centerObj = null;
            if((this.isValidCenterCoordinates(stringCoordinates) && separator === ',') ||
              (this.isValidPolygonCoordinates(stringCoordinates) && separator === '$' )){
              var splitedString = stringCoordinates.split(separator);
              centerObj = {
                latitude: parseFloat(splitedString[0]),
                longitude: parseFloat(splitedString[1])
              };
            }
            return centerObj;
        },
        getPolygonCoordinates: function(stringCoordinates){
          var coordinates = null;
          if(this.isValidPolygonString(stringCoordinates)){
            var splitedCoordinates = stringCoordinates.split('+');
            coordinates = [];
            for (var i = 0; i < splitedCoordinates.length; i++) {
              coordinates.push(this.getConvertedCoordinates(splitedCoordinates[i], '$'));
            }
          }
          return coordinates;
        }
    };
});