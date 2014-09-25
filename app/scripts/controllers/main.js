'use strict';

/**
 * @ngdoc function
 * @name projectAApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectAApp
 */
angular.module('projectAApp')
  .controller('MainCtrl', function ($scope) {
    $scope.message = 'Hello world from controller.'
    $scope.switch = false;
  });
