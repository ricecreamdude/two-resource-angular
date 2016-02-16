const mongoose = require('mongoose');

friendSchema = new mongoose.Schema({
  name: {type:String, required:true},
  gender: {type:String, default:'Female'},
  age: {type:Number, default:21},
  relationship: {type: String , default:'Best'},
  hatesJosh: {type:Boolean , default:true}
});

module.exports = exports = mongoose.model('Friend' , friendSchema);
