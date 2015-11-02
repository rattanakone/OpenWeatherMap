'use strict';

/**
 * @ngdoc function
 * @name openWeatherMapApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the openWeatherMapApp
 */
angular.module('openWeatherMapApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = current.query({
        cityID: $routeParams.cityID
    });


  });
