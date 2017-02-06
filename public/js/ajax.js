'use strict'

angular.module("MyAjax", [])
  .controller("AjaxController", ($scope, $http) => {

    $scope.datas = [];
    $scope.newPost = {};

//  Obtener Datos
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then((success)=>{
      $scope.datas = success.data;
      console.log(success);
    },(err)=>{
      console.log(`Error ${err} al obtener la informacion del servidor`);
    });

//  Funcion Añadir Post
    $scope.addPost = function () {
      console.log("Inicio POST");
      console.log($scope.newPost.title);
      $http.post("https://jsonplaceholder.typicode.com/posts", {
          title : $scope.newPost.title,
          body  : $scope.newPost.body,
          userId: 1
      })
      .then((success)=>{
        console.log("Exito!");
        $scope.datas.push($scope.newPost);
        $scope.newPost = {};
      },(err)=>{
        console.log(`Error ${err}`);
      });
    };

  });
