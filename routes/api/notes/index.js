const router = require("express").Router();
const db = require("../../../models");

// Matches with "/api/notes"
router.get("/", function (req, res) {
  db.Note.find({})
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

// router.post("/notes", function (req,res) {
//   db.Note.create({
//     topic: req.body.topic,
//     url: req.body.url,
//     notes: req.body.password,
//   })
//   .then(dbModel => res.json(dbModel))
//   .catch(err => res.status(422).json(err));
// })

// router.remove("/notes/id", function (req, res) {
//   db.Note.remove.findById({ _id: req.params.id})
//   .then(dbModel => dbModel.remove()).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
// })
// Matches with "/api/notes/:id"
// router
//   .route("/:id")
//   .get(notesController.findById)
//   .put(notesController.update)
//   .delete(notesController.remove);

module.exports = router;
