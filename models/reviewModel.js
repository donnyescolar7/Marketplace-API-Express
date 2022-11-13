const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const reviewModel = new mongoose.Schema({
  user: { type: ObjectId, required: true }, //name displayed on screen
  stars: { type: Number, required: true }, //unique username
  comment: { type: String, required: true }, //where the user lives
  text: { type: String, required: true }, //a brief description of the user
  date: { type: Date, default: Date.now }, //the date of creation of the user
});

module.exports = mongoose.model("Review", reviewModel);