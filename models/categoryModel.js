const mongoose = require("mongoose");
//const ObjectId = require("mongodb").ObjectId;

const categoryModel = new mongoose.Schema({
  category: { type: String, required: true }, //category name displayed on screen
  date: { type: Date, default: Date.now }, //the date of creation of the category
});

module.exports = mongoose.model("Category", categoryModel);