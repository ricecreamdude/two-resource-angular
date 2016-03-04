//This is broken, not changing view

module.exports = function(app) {
  app.controller('FriendController' , ['$scope' , '$http' , 'cfResource' , function ($scope , $http , Resource) {
    $scope.title = 'List of Friends in my life';
    var friendService = Resource('/friends');
    // console.log('Hello from Friend Controller')
    $scope.getAll = function() {
      friendService.getAll( function(err , res) {
        if (err) return console.log(err);
        $scope.friends = res;
        $scope.message = res.msg;
        console.log("Friends getAll'd");
        console.log($scope.friends);
      });
    };

//$scope.friends returns [];
    $scope.post = function(person) {
      $scope.friends.push(person);
      console.log($scope.friends);
      friendService.post(person , function(err , res) {
        if (err) return console.log(err);
        $scope.newPerson = null;

      });
    };

    $scope.put = function(friend) {
      friendService.put(friend , function(err , res) {
        if (err) return console.log(err);
        $scope.message = "Friend Edited";
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
