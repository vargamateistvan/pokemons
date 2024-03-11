const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pokemon = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model("Pokemon", Pokemon);
