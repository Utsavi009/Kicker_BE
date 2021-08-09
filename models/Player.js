const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Player = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  score: {
    type: Number,
    default: 5,
  },
});

module.exports = mongoose.model("Player", Player);
