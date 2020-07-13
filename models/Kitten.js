const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KittenSchema = new Schema({
  name: String,
  age: Number,
  sleepy: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Kitten", KittenSchema);