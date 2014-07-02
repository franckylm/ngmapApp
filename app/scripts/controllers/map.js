'use strict';

/**
 * @ngdoc function
 * @name ngmapApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the ngmapAppApp
 */
angular.module('ngmapApp')
  .controller('MapCtrl', function ($scope) {

	$scope.drawCircle = function (){
		var circleObject = {
			radius: parseInt($scope.formfields.radius),
			center: $scope.formatCenterField($scope.formfields.center, ','),
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
		$scope.circles.push(circleObject);
		$scope.formfields = {};
	};

	$scope.drawPolygon = function () {
		var polygonObject = {
			visible: true, 
			editable: true, 
			draggable: true, 
			geodesic: false, 
			stroke: { 
				weight: 3, 
				color: '#6060FB'
			}, 
			path:$scope.formatPolygonString()
		};
		$scope.polygons.push(polygonObject);
		$scope.formfields = {};
	};

	$scope.formatPolygonString = function(){
		//test string 50.00$-80.00+30.00$-120.00+20.00$-95.00 
		var splitedCoordinates = $scope.formfields.polygonString.split('+');
		var coordinates = [];
		for (var i = 0; i < splitedCoordinates.length; i++) {
			coordinates.push($scope.formatCenterField(splitedCoordinates[i], '$'));
		}
		return coordinates;
	};

	$scope.formatCenterField = function(stringField, separator) {
		var splitedString = stringField.split(separator);
		splitedString[0] = parseFloat(splitedString[0]);
		splitedString[1] = parseFloat(splitedString[1]);
		var centerObj = null;
		if(!isNaN(splitedString[0]) && !isNaN(splitedString[1])){
			centerObj = {
				latitude: splitedString[0],
	        	longitude: splitedString[1]
			};
		}
		return centerObj;
	};

	$scope.refreshMap = function () {
		$scope.circles = [];
		$scope.polygons = [];
		$scope.formfields = {};
		$scope.refresh = true;
	};

	$scope.refresh = false;

	$scope.map = {
	    center: {
	        latitude: 45,
	        longitude: -73
	    },
	    zoom: 6
	};

	$scope.formfields = {
		radius: '',
		center: '',
		polygonString: ''
	};


	$scope.circles = [];
	$scope.polygons = [];
    
  });