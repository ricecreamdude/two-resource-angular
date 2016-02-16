const angular = require('angular');
const router = require('angular-ui-router');

// // Special stuff I am learning
var toDoApp = angular
  .module('toDoApp' , ['ui.router'])
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
            $http.post('/api/friends' , friends);
          };
          $scope.delete = function(){
            friends.splice($index,1);
            $http.post('/api.friends' , friends);
          }
        }],
        //These things must load before other stuff loads
        //Look - an HTTP request c:
        resolve: {
          friends: ['$http' , ($http) => {
            return $http.get('/api/friends.json').then( (res) => {
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

// var toDoApp = angular.module('ToDoApp' , [])
// .controller(
//
// );
//Use set interval to have this run continuously, so updates occur
//on main JS file.
