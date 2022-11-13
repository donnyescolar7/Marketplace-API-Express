const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const productModel = new mongoose.Schema({
  description: { type: String, required: true }, //name displayed on screen
  stars: { type: Number, default: 0}, //unique username
  reviews: { type: [ObjectId], default: [] }, //where the user lives
  price: { type: Number, required: true }, //a brief description of the user
  brand: { type: String, required: true }, //name displayed on screen
  specs: { type: [String], required: true }, //list of product's specs
  category: { type: ObjectId, required: true }, //where the user lives
  date: { type: Date, default: Date.now }, //the date of creation of the user
});

module.exports = mongoose.model("Product", productModel);