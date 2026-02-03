const Subject = require("../models/Subject");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.createStudent = async (req,res) => {
    const { firstname,lastname, email, password, standard, subjects } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const student = await User.create({
    firstname,
    lastname,
    email,
    password: hash,
    role: "student",
    standard,
    subjects
  });

  res.status(201).json(student);
}

exports.viewSubjects = async (req, res) => {
  const teacher = await User.findById(req.user.id)
    .populate("subjects")
    .populate("standard");

  res.json(teacher.subjects);
};
