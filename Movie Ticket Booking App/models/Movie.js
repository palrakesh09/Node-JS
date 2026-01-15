const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
name:String,duration:String,genre:String,rating:Number,image:String
});
module.exports = mongoose.model("Movie", movieSchema);