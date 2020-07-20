const router = require("express").Router();

// /api
router.use("/api", require("./api"));

module.exports = router;
