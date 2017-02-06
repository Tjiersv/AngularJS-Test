'use strict'

const app = angular.module('ToDoList', ['LocalStorageModule'])

app.controller('ToDoController', ($scope, localStorageService) => {

  if (localStorageService.get("angular-todolist")) {
    $scope.todo = localStorageService.get("angular-todolist")
  }else{
    $scope.todo = []
  }
  /*
    {
      descripcion: 'Terminar el curso de Angular',
      fecha: '3-03-17 2:00pm'
    }
  */
  $scope.addActividad = () => {
    $scope.todo.push($scope.newActividad)
    $scope.newActividad = {}
    localStorageService.set("angular-todolist", $scope.todo)
  }
});
