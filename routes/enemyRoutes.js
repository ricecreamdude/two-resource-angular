const express = require('express');
const mongoose = require('mongoose');
const Friend = require( __dirname + '/../models/friend');

var profileRouter = module.exports = exports = express.Router();
//We need to use auth.routes to direct users to this route

profileRouter.route('/friends')
  .get( (res , req) => {
    Friend.find({} , (err,data) => {

    })
    res.status(500).json( {'msg':'Sent a list of your friends.'};
  });
  .post( (res, req) => {
    res.status(500).json( {'msg':'Added a new friend to your list. '};
  })
  .put( (res, req) => {
    res.status(500).json( {'msg':'Updated your enemy.'};
  })
  .delete( (res, req) => {
    res.status(500).json( {'msg':'"Deleting" an enemy >:)'};
  })
  res.end(data);
});
