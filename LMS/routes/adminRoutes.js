const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const admin = require("../controllers/adminController");

router.post("/standard", auth, role("admin"), admin.createStandard);
router.post("/subject", auth, role("admin"), admin.createSubject);
router.post("/assign-subjects", auth, role("admin"), admin.assignSubjectsToTeacher);
router.post("/create-user",auth, role("admin"), admin.createUser)
router.delete("/user/:id", auth, role("admin"), admin.deleteUser);

module.exports = router;
