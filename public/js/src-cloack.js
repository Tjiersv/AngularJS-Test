'use strict'

angular.module('customDirective',[])
  .controller('appCtrl', ($scope, $http) => {
    $http.get("https://api.github.com/users/urielhdz/repos")
    .then((success)=>{
      $scope.repos = success.data;
      console.log(success);
    },(err)=>{
      console.log(`Error ${err} al obtener la informacion del servidor`);
    });
  })
