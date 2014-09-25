'use strict';

/**
 * @ngdoc function
 * @name projectAApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectAApp
 */
angular.module('projectAApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
