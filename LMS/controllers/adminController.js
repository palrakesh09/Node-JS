const User = require("../models/User");
const Standard = require("../models/Standard");
const Subjects = require("../models/Subject");
const bcrypt = require("bcryptjs");

exports.createUser = async (req,res) => {
    const { firstname, lastname, password, role, standard, subjects } = req.body;

  if (!["teacher", "student"].includes(role)) {
    return res.status(400).json({
      message: "Admin can create only teacher or student"
    });
  }

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

  res.status(201).json(user);

}

exports.createStandard = async (req, res) => {
  res.json(await Standard.create(req.body));
};

exports.createSubject = async (req, res) => {
  res.json(await Subjects.create(req.body));
};

exports.assignSubjectsToTeacher = async (req, res) => {
  const { subjectIds, teacherId } = req.body;

  const teacher = await User.findByIdAndUpdate(
    teacherId,
    { $addToSet: { subjects: { $each: subjectIds } } },
    { new: true }
  );

  // update subjects
  await Subjects.updateMany(
    { _id: { $in: subjectIds } },
    { $addToSet: { teachers: teacherId } }
  );

  res.json(teacher);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
