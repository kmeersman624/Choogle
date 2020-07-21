const router = require("express").Router();

// /api/user
router.use("/users", require("./users"));
router.use("/notes", require("./notes"));

module.exports = router;
