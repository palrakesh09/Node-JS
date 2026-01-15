const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
seatId:String,showId:String,price:Number,customerId:String,bookingDate:String
});
module.exports = mongoose.model("Ticket", ticketSchema);