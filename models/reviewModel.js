const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const reviewModel = new mongoose.Schema({
  user: { type: ObjectId, required: true }, //id of the user writing the review
  product: { type: ObjectId, required: true }, //id of the product being reviewed
  stars: { type: Number, required: true }, //number of stars the user gives to the product
  comment: { type: String, required: true }, //short title of the review
  text: { type: String, required: true }, //a brief description of the user experience with the product
  date: { type: Date, default: Date.now }, //the date of creation of the review
});

module.exports = mongoose.model("Review", reviewModel);