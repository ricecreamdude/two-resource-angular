const angular = require('angular');
const router = require('angular-ui-router');

// // Special stuff I am learning


//Scope properties ONLY inherit down state chains if views are nested
//
var friendsApp = angular
  .module('friendsApp' , ['ui.router'] )
  .config(['$urlRouterProvider' , '$stateProvider', function($urlRouterProvider,$stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('friends', {
        url: '/friends',
        templateUrl: './../templates/friends.html',
        controller: 'friendController',
        resolve: {}
      })
      .state('enemies' , {
        url: '/enemies' ,
        templateUrl: './../templates/enemies.html',
        controller: 'enemyController', //end controller
        resolve: {}//end resolve
      })
  }]); //End of angular object



// friendsApp.controller( 'enemyController' , ['$scope','$http',function($scope , $http) {
//
//   $scope.title = "List of Enemies in my life".
//
//   $scope.getAll = function() {
//     $http.get('/api/enemies')
//     .then( (res) => {
//       $scope.enemies = res.data;
//       $scope.message = res.msg;
//     });
//   }
//   $scope.post = function(data){
//     var newEnemy = data;
//     $http.post('/api/enemies' , newEnemy)
//     .then( (res) => {
//       $scope.message = 'New Enemy added :I ';
//       $scope.enemies.push(res.data);
//     })
//   }
//   $scope.put = function(enemyData){
//     $http.put('/api/enemies/' + enemyData._id , enemyData)
//     .then( (res) =>{
//       $scope.message = res.data.msg;
//     })
//   }
//   $scope.delete = function(person, $index){
//     $http.delete('/api/enemies/' + person._id).then( (res) => {
//       $scope.enemies.splice($index,1);
//       $scope.message = res.data.msg;
//     })
//   }
// }])

friendsApp.controller( 'enemyController' , ['$scope','$http', function ($scope , $http) {

  $scope.title = 'List of Enemies in my life';

  $scope.getAll = function() {
    $http.get('/api/enemies')
    .then( (res) => {
      $scope.enemies = res.data;
      $scope.message = res.msg;
    });
  }

  $scope.post = function(data){
    var newEnemy = data;
    $http.post('/api/enemies' , newEnemy)
    .then( (res) => {
      $scope.message = 'New enemy added :( ';
      $scope.enemies.push(res.data);
    })
  }
  $scope.put = function(enemyData){
    $http.put('/api/enemies/' + enemyData._id , enemyData)
    .then( (res) =>{
      $scope.message = res.data.msg;
    })
  }
  $scope.delete = function(person, $index){
    $http.delete('/api/enemies/' + person._id).then( (res) => {
      $scope.enemies.splice($index,1);
      $scope.message = res.data.msg;
    })
  }
}])


friendsApp.controller( 'friendController' , ['$scope','$http', function ($scope , $http) {

  $scope.title = 'List of Friends in my life';
  $scope.friends = $scope.friends || {};

  $scope.getAll = function() {
    $http.get('/api/friends')
    .then( (res) => {
      $scope.friends = res.data;
      $scope.message = res.msg;
    });
  }

  $scope.post = function(data){
    var newFriend = data;
    $http.post('/api/friends' , newFriend)
    .then( (res) => {
      $scope.message = 'New friend added :) ';
      $scope.friends.push(res.data);
    })
  }
  $scope.put = function(friendData){
    $http.put('/api/friends/' + friendData._id , friendData)
    .then( (res) =>{
      $scope.message = res.data.msg;
    })
  }
  $scope.delete = function(person, $index){
    $http.delete('/api/friends/' + person._id).then( (res) => {
      $scope.friends.splice($index,1);
      $scope.message = res.data.msg;
    })
  }
}])

//wtf is this??
friendsApp.run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ])
