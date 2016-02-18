const angular = require('angular');
const router = require('angular-ui-router');

// // Special stuff I am learning
var friendsApp = angular
  .module('friendsApp' , ['ui.router'])
  .config(['$urlRouterProvider' , '$stateProvider', function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('friends', {
        url: '/friends',
        templateUrl: './../templates/friends.html',
        controller: ['$scope','$http' , function ($scope , $http) {
          $scope.title = 'List of People in my life';
          $scope.items = ['home' , 'about' , 'contact'];
          $scope.friends = {};

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
        }],
        resolve: {

        } //End Resolve
      })
      // .state('enemies' , {
      //   url: '/enemies' ,
      //   templateUrl: './../templates/enemies.html',
      //   controller: ['$scope','$http' , function ($scope , $http) {
      //
      //     $scope.get = function({
      //       $state.go('enemies');
      //       $scope.enemies
      //     })
      //
      //   }], //end controller
      //   resolve: {
      //
      //   }//end resolve
      // })
      .state('about' , {
        url: '/about' ,
        templateUrl: './../templates/about.html'
      })

  }]);
