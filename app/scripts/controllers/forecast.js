'use strict';

/**
 * @ngdoc function
 * @name openWeatherMapApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the openWeatherMapApp
 */
angular.module('openWeatherMapApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });
