angular
  .module('toDoApp')
  .controller('homeControl' , ['$scope' , function($scope){
    $scope.title = 'Home';
    $scope.items = ['home' , 'about' , 'contact'];
  }]);
