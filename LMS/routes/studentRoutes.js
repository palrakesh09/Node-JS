const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const student = require("../controllers/studentController");

router.get("/profile", auth, role("student"), student.profile);

module.exports = router;