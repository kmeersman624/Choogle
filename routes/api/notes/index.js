const router = require("express").Router();
const db = require("../../../models");
const isAuthenticated = require("../../../config/middleware/isAuthenticated");

// Matches with "/api/notes"
router.get("/", isAuthenticated, function (req, res) {
  db.Note.find({})
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

// Matches with "/api/notes"
router.post("/", isAuthenticated, function (req, res) {
  console.log(req.body);
  db.Note.create({
    topic: req.body.topic,
    url: req.body.url,
    body: req.body.body,
  })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.get("/:id", function (req, res) {
  db.Note.remove
    .findById({ _id: req.params.id })
    .then((dbModel) => dbModel.remove())
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});
// Matches with "/api/notes/:id"
// router
//   .route("/:id")
//   .get(notesController.findById)
//   .put(notesController.update)
//   .delete(notesController.remove);

module.exports = router;
