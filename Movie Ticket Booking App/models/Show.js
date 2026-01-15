const mongoose = require("mongoose");
const showSchema = new mongoose.Schema({
movieId:String,showDate:String,showTime:String,availableSeats:Number
});
module.exports = mongoose.model("Show", showSchema);