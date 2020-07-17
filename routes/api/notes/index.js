const router = require("express").Router();
const db = require("../../../models");

// Matches with "/api/notes"
router.get("/", function (req, res) {
  db.Note.find({})
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
