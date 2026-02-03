const mongoose = require('mongoose');
module.exports = mongoose.model('Ticket', new mongoose.Schema({
showId:{type:mongoose.Schema.Types.ObjectId, ref:'Show'},
custId:{type:mongoose.Schema.Types.ObjectId, ref:'Customer'},
seatNumber:Number, 
bookingDate:String
}));