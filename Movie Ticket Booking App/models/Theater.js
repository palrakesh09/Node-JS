const mongoose = require('mongoose');
module.exports = mongoose.model('Theater', new mongoose.Schema({
name:String, 
location:String, 
theaterSeats:Number
}));