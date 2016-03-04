module.exports = function(app) {
  app.directive('friendPostForm' , function(){
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: '/templates/friend/directives/friend_post_form.html',
      scope: true
    };
  });
};
