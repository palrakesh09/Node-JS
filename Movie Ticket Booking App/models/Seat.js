const mongoose=require('mongoose');
const seatSchema=new mongoose.Schema({
show:{type:mongoose.Schema.Types.ObjectId,ref:'Show'},
number:String,
booked:{type:Boolean,default:false}
});
module.exports=mongoose.model('Seat',seatSchema);