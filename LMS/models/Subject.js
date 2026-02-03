const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: String,
  standard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Standard"
  },
  teacher:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model("Subject", subjectSchema);