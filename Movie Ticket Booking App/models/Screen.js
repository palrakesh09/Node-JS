const mongoose = require('mongoose');
module.exports = mongoose.model('Screen', new mongoose.Schema({
theaterId:{type:mongoose.Schema.Types.ObjectId, ref:'Theater'},
screenCapacity:Number, 
screenNumber:Number
}));