const router = require("express").Router();

// /api/user
router.use("/users", require("./users"));

module.exports = router;