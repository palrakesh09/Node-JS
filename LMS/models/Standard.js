const mongoose = require("mongoose");

const standardSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Standard", standardSchema);