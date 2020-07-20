const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  topic: String,
  url: String,
  body: String,
});

module.exports = mongoose.model("Note", NoteSchema);
