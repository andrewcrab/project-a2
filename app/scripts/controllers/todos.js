/**
 * Created by Andrew on 14-9-22.
 */
angular.module('projectAApp')
    .controller('TodosCtrl', function ($scope) {
        $scope.todos = [];
        $scope.addTodo = function(){
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };
        $scope.removeTodo = function(index){
            $scope.todos.splice(index, 1);
        };

    });