angular.module('MyTodo', ['LocalStorageModule'])
  .service('MyTodoService', (localStorageService) => {

    this.key = "angular-todolist"

    if (localStorageService.get(this.key)) {
      this.activities = localStorageService.get(this.key)
    }else{
      this.activities = [];
    }this

    this.add = (newActivity) => {
      this.activities.push(newActivity)
      this.updateLocalStorage()
    }
    this.updateLocalStorage = () => {
      localStorageService.set(this.key, this.activities)
    }
    this.clean = () => {
      this.activities = []
      this.updateLocalStorage()
      return this.getAll()
    }
    this.getAll = () => {
      return this.activities;
    }
    this.removeItem = (item) => {
      this.activities = this.activities.filter((activty) => {
        return activty != item
      })
      this.updateLocalStorage()
      return this.getAll()
    }

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
