'use strict';

/**
 * @ngdoc service
 * @name openWeatherMapApp.current
 * @description
 * # current
 * Factory in the openWeatherMapApp.
 */
angular.module('openWeatherMapApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=fc7e92fcf160b4bbfb250871a38f0b2e', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });