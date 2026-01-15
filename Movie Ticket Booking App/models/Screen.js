const screenSchema = new mongoose.Schema({
  screenId: String,
  theaterId: String,
  screenType: String,
  totalSeats: Number,
  bookedSeats: Number
});
module.exports = mongoose.model("Screen", screenSchema);
