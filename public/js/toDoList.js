'use strict'

const app = angular.module('ToDoList', ['LocalStorageModule'])

app.controller('ToDoController', ($scope, localStorageService) => {

  if (localStorageService.get("angular-todolist")) {
    $scope.todo = localStorageService.get("angular-todolist")
  }else{
    $scope.todo = []
  }
  $scope.$watchCollection('todo', (newValue, oldValue) => {
    localStorageService.set("angular-todolist", $scope.todo)
  })
  $scope.addActividad = () => {
    $scope.todo.push($scope.newActividad)
    $scope.newActividad = {}
  }
  $scope.clearActividad = () => {
    $scope.todo = []
  }
});

/*
Formato del ToDo
  {
    descripcion: 'Terminar el curso de Angular',
    fecha: '3-03-17 2:00pm'
  }
*/
