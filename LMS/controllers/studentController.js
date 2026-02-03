const User = require("../models/User");

exports.profile = async (req, res) => {
  const student = await User.findById(req.user.id).populate("standard");
  res.json(student);
};
