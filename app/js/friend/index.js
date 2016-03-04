module.exports = function(app) {
  //Controllers first
  require('./controllers/friend_controller')(app);

  //Then Directives
  require('./directives/friend_display_directive')(app);
};
