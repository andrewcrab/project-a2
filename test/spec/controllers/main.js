//'use strict';
//
//describe('Controller: MainCtrl', function () {
//
//    // load the controller's module
//    beforeEach(module('projectAApp'));
//
//    var MainCtrl,
//    scope;
//
//    // Initialize the controller and a mock scope
//    beforeEach(inject(function ($controller, $rootScope) {
//    scope = $rootScope.$new();
//    MainCtrl = $controller('MainCtrl', {
//      $scope: scope
//    });
//    }));
//
//    it('Test to pass', function () {
//    expect(true).toBe(true);
//    });
//
//    it('should have no items to start with', function(){
//      expect(scope.todos.length).toBe(0);
//    });
//
//    it('should add todo to todos', function(){
//        scope.todo = 'Item 1';
//        scope.addTodo();
//        expect(scope.todos.length).toBe(1);
//    });
//
//    it('should remove todo from todos', function(){
//        scope.todo = 'Item 1';
//        scope.addTodo();
//        scope.removeTodo(0);
//        expect(scope.todos.length).toBe(0);
//    });
//});
