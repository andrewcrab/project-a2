/**
 * Created by Andrew on 14-9-22.
 */
angular.module('projectAApp')
    .directive('myShow', ['$animate'], function($animate){
        return {
            restrict: 'A',
            multiElement: true,
            link: function(scope, element, attr) {
                scope.$watch(attr.ngShow, function ngShowWatchAction(value){
                    $animate[value ? 'removeClass' : 'addClass'](element, 'ng-hide');
                });
            }
        };

    });