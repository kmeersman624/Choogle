const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  topic: String,
  url: String,
  notes: String,
});

module.exports = mongoose.model("notes", NoteSchema);