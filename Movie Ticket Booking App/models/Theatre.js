const theaterSchema = new mongoose.Schema({
  theaterId: String,
  name: String,
  location: String
});
module.exports = mongoose.model("Theater", theaterSchema);