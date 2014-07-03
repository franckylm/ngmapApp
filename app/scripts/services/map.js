'use strict';

angular.module('ngmapApp').service('MapService', function() {
   var circles = [];
   var polygons = [];
   var map = {};
  return {
         initMap: function(){
            this.refreshMap();
            map = {
                center: {
                    latitude: 45,
                    longitude: -73
                },
                zoom: 6
            };
            return map;
         },
         getMap: function(){
            return map;
         },
         getCircles: function(){
            return circles;
         },
         getPolygons: function(){
            return polygons;
         },
         addCircleToMap: function(radius, coordinates){
            var circleObject = {
              radius: radius,
              center: coordinates,
              fil: {
                color: '#08B21F',
                opacity: 0.5
              },
              stroke: {
                weight: 2, 
                color: '#08B21F', 
                opacity: 1 
              }
            };
            circles.push(circleObject);
         },
         addPolygonToMap: function(coordinates){
            var polygonObject = {
              visible: true, 
              editable: true, 
              draggable: true, 
              geodesic: false, 
              stroke: { 
                weight: 3, 
                color: '#6060FB'
              }, 
                path: coordinates
            };
            polygons.push(polygonObject);
         },
         refreshMap: function(){
            circles = [];
            polygons = [];
         }
    };
});