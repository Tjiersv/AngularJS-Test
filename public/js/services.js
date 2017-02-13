angular.module('MyTodo', ['LocalStorageModule'])
  .factory('MyTodoService', (localStorageService) => {

    var todoService = {}
    todoService.key = "angular-todolist"

    if (localStorageService.get(todoService.key)) {
      todoService.activities = localStorageService.get(todoService.key)
    }else{
      todoService.activities = [];
    }

    todoService.add = (newActivity) => {
      todoService.activities.push(newActivity)
      todoService.updateLocalStorage()
    }
    todoService.updateLocalStorage = () => {
      localStorageService.set(todoService.key, todoService.activities)
    }
    todoService.clean = () => {
      todoService.activities = []
      todoService.updateLocalStorage()
      return todoService.getAll()
    }
    todoService.getAll = () => {
      return todoService.activities;
    }
    todoService.removeItem = (item) => {
      todoService.activities = todoService.activities.filter((activty) => {
        return activty != item
      })
      todoService.updateLocalStorage()
      return todoService.getAll()
    }

    return todoService;

  })
  .controller('MyTodoController',($scope, MyTodoService) => {

    $scope.todo = MyTodoService.getAll();
    console.log($scope.todo);
    $scope.newActv = {}
    $scope.addActv = () => {
      MyTodoService.add($scope.newActividad)
      $scope.newActv = {}
    }
    $scope.deleteActv = (item) => {
      $scope.todo = MyTodoService.removeItem(item)
    }
    $scope.clean = () => {
      $scope.todo = MyTodoService.clean()
    }

  })
