const mongoose = require('mongoose');
module.exports = mongoose.model('Show', new mongoose.Schema({
movieId:{type:mongoose.Schema.Types.ObjectId, ref:'Movie'},
screenId:{type:mongoose.Schema.Types.ObjectId, ref:'Screen'},
showDate:String, 
showTime:String, 
availableSeats:Number
}));