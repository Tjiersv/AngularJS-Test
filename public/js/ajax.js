'use strict'

angular.module("MyAjax", [])
  .controller("AjaxController", ($scope, $http) => {
    $scope.datas = []
    $http.get("https://jsonplaceholder.typicode.com/posts")
      .then((success)=>{
        $scope.datas = success.data;
        console.log(success);
      },(err)=>{
        console.log(`Error ${err} al obtener la informacion del servidor`);
      });
    $http.post("https://jsonplaceholder.typicode.com/posts")
      .then((success)=>{
      },(err)=>{
        console.log(`Error ${err}`);
      });
  })
