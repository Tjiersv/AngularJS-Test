angular.module('MyApp', [])
  .run(($rootScope) => {
    $rootScope.nombre = "Probando rootScope"
  })
  .controller('MyController',($scope)=>{
    $scope.title = "Probando rootScope y Chils"

    $scope.nombre = "Probando $rS"
  })
  .controller('ChildController', () => {

  })
