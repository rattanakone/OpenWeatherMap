'use strict';

/**
 * @ngdoc service
 * @name openWeatherMapApp.citysearch
 * @description
 * # citysearch
 * Factory in the openWeatherMapApp.
 */
angular.module('openWeatherMapApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=fc7e92fcf160b4bbfb250871a38f0b2e', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
