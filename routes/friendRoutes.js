//Framework
const express = require('express');

//Middleware
const dbError = require(__dirname + '/../lib/handleServerError');
const bodyParser = require('body-parser').json();
//Mongoose
const mongoose = require('mongoose');
const Friend = require( __dirname + '/../models/friend');


var profileRouter = module.exports = exports = express.Router();
//We need to use auth.routes to direct users to this route

profileRouter.route('/friend')
  .get( (req , res) => {
    Friend.find( {} , (err ,data) => {
      if(err) return dbError(err , res);
      data.msg = 'Sent a list of your friends.';
      res.status(200).json(data);
    });
  })
  .post( bodyParser , (req, res) => {
    var newFriend = new Friend(req.body);
    newFriend.save( (err , data) => {
      if(err) return dbError(err , res);
      res.status(200).json( {'msg':'Added a new friend to your list. Oh boy!'} );
    });
  })
  .put( bodyParser , (req, res) => {
    var friendData = req.body;
    delete friendData._id;
    Friend.update({_id: friendData._id} , friendData , (err, data) => {
      if(err) return dbError(err , res);
      res.status(200).json({'msg':'Updated your friend.'});
    });
  })
  .delete( bodyParser , (req, res) => {
    var friendData = req.body;
    Friend.remove({_id: friendData._id} , (err) => {
      if(err) return dbError(err , res);
      res.status(200).json({'msg':'Updated your friend.'});
    });
  })
