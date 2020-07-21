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

router.delete("/:id", function (req, res) {
  console.log("delete route");
  db.Note.findById({ _id: req.params.id })
    .then((dbModel) => {
      console.log("inside delete route: ", dbModel);
      dbModel.remove();
    })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.put("/:id", function (req, res) {
  console.log("update route");
  db.Note.findByIdAndUpdate(req.params.id, req.body)
    .then((dbModel) => {
      dbModel.update();
    })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
