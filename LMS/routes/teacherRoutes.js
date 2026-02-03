const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const teacher = require("../controllers/teacherController");

router.get("/subjects", auth, role("teacher"), teacher.viewSubjects);
router.post("create-student", auth, role("teacher"), teacher.createStudent);

module.exports = router;