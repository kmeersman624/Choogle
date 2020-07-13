const router = require("express").Router();

// /api/kittens
router.use("/kittens", require("./kittens"));

module.exports = router;