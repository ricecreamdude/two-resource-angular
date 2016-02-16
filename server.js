const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/friends_app_dev');

var PORT = 5000;

express().use(
  express.static( __dirname + '/build')
).listen(PORT , () => {
  console.log('Server is running on port ' + PORT + '.');
});
