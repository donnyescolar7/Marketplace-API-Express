const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const productModel = new mongoose.Schema({
  description: { type: String, required: true }, //name displayed on screen
  price: { type: Number, required: true }, //a brief description of the user
  brand: { type: String, required: true }, //name displayed on screen
  category: { type: ObjectId, required: true }, //category of the product
  date: { type: Date, default: Date.now }, //the date of creation of the product
});

module.exports = mongoose.model("Product", productModel);