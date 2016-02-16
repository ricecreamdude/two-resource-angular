const angular = require('angular');
const router = require('angular-ui-router');

// // Special stuff I am learning
var friendsApp = angular
  .module('friendsApp' , ['ui.router'])
  .config(['$urlRouterProvider' , '$stateProvider', function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './../templates/home.html',
        controller: ['$scope', 'friends' , function ($scope, friends) {
          $scope.title = 'Home';
          $scope.friends = friends;
          $scope.items = ['home' , 'about' , 'contact'];

          $scope.save = function(){
            $http.post('/api/friend' , friends);
          };
          $scope.delete = function(){
            friends.splice($index,1);
            $http.post('/api/friend' , friends);
          }
        }],
        //These things must load before other stuff loads
        //Look - an HTTP request c:
        resolve: {
          friends: ['$http' , ($http) => {
            return $http.get('/api/friend').then( (res) => {
              console.log(res.data);
              return res.data;
            })
          }]
        }
      })
      .state('about' , {
        url: '/about' ,
        templateUrl: './../templates/about.html'
      })
  }]);
