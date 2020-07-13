const router = require("express").Router();
const db = require("../../../models");

// GET - /api/kittens
router.get("/", async function (req, res) {
  try {
    res.json(await db.Kitten.find());
  } catch (err) {
    res.status(500).end();
  }
});

// GET - /api/kittens/:id
router.get("/:id", async function (req, res) {
  try {
    res.json(await db.Kitten.findById(req.params.id));
  } catch (err) {
    res.status(500).end();
  }
});

// POST - /api/kittens
router.post("/", async function (req, res) {
  try {
    res.json(await db.Kitten.create(req.body));
  } catch (err) {
    res.status(500).end();
  }
});

// PUT - /api/kittens/:id
router.put("/:id", async function (req, res) {
  try {
    res.json(await db.Kitten.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;