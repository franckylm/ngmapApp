'use strict';

angular.module('ngmapApp').controller('MapCtrl', ['$scope' ,'ParamHelperService', 'MapService',  
    function($scope, ParamHelperService, MapService) {
      
    function init(){
  		$scope.map = MapService.initMap();
  	}

  	init();

	$scope.drawCircle = function (){
		if(ParamHelperService.checkCircleRadius($scope.formfields.radius) && 
		   ParamHelperService.isValidCenterCoordinates($scope.formfields.center))
		{
			var radius = parseInt($scope.formfields.radius) * 1000; //in Km
			var center = ParamHelperService.getConvertedCoordinates($scope.formfields.center, ',');
			MapService.addCircleToMap(radius, center);
			$scope.circles = MapService.getCircles();
			$scope.formfields = {};
		}
	};

	$scope.drawPolygon = function () {
		if(ParamHelperService.isValidPolygonString($scope.formfields.polygonString)){
			var coordinates = ParamHelperService.getPolygonCoordinates($scope.formfields.polygonString);
			MapService.addPolygonToMap(coordinates);
			$scope.polygons = MapService.getPolygons();
			$scope.formfields = {};
		}
	};

	$scope.refreshMap = function () {
		$scope.circles = [];
		$scope.polygons = [];
		$scope.formfields = {};
		$scope.refresh = true;
	};

	$scope.refresh = false;

	$scope.formfields = {
		radius: '',
		center: '',
		polygonString: ''
	};
	$scope.circles = [];
	$scope.polygons = [];
     
  }]);