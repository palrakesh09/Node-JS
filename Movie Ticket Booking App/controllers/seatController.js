const Seat=require('../models/Seat');
exports.viewSeats=async(req,res)=>{
const seats=await Seat.find({show:req.params.id});
res.render('seats',{seats,showId:req.params.id});
};
exports.bookSeat=async(req,res)=>{
await Seat.findByIdAndUpdate(req.body.seatId,{booked:true});
res.redirect('/payment');
};