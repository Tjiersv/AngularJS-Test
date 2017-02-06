'use strict'

const app = angular.module("MyApp", []);

app.controller("MyController", ($scope) =>{
  $scope.titulo = "Caja de Comentarios";
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      mensaje: "probando ng-repeat",
      usuario: "Tjier"
    },
    {
      mensaje: "probando ng-model",
      usuario: "Tjier-2"
    }
  ];
  $scope.agregarComentario = () => {
    $scope.comentarios.push($scope.nuevoComentario)
    $scope.nuevoComentario = {}
  };

});
