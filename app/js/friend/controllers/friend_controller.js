//This is broken, not changing view

module.exports = function(app) {
  app.controller('FriendController' , ['$scope' , '$http' , 'cfResource' , function ($scope , $http , Resource) {
    $scope.title = 'List of Friends in my life';
    $scope.friends = [];

    var friendService = Resource('/friends');
    // console.log('Hello from Friend Controller')
    $scope.getAll = function() {
      friendService.getAll( function(err , res) {
        if (err) return console.log(err);
        $scope.friends = res;
        $scope.message = res.msg;
        console.log($scope.friends);
      });
    };

    $scope.post = function(person) {
      console.log(person.age);
      $scope.friends.push({name: "Jimbo from controller" , age: 8});
      // $scope.friends.push(person);
      friendService.post(person , function(err , res) {
        if (err) return console.log(err);
        // $scope.friends.splice($scope.friends.indexOf(person) , 1, res);
        $scope.newPerson = null;

      });
    };

    $scope.put = function(friend) {
      friendService.put(friend , function(err , res) {
        if (err) return console.log(err);
        $scope.message = res.data.msg;
      });
    };

    $scope.delete = function(exFriend, index) {
      friendService.delete(exFriend , function(err , res) {
        if (err) return console.log(err);
        $scope.friends.splice(index , 1);
        $scope.message = 'Friend Deleted :[ ';
      });
    };
  }]);
};

//CHECKED
