const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { firstname,lastname, email, password, role, standard, subjects } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hash,
    role,
    standard,
    subjects
  });

  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({ token: generateToken(user) });
};