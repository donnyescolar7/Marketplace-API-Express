const mongoose = require("mongoose");
//const ObjectId = require("mongodb").ObjectId;

const userModel = new mongoose.Schema({
  fullname: { type: String, required: true }, //name displayed on screen
  email: { type: String, required: true }, //unique email
  password: { type: String, required: true }, //the user's password
  phone: { type: Number, default: 0 }, //the user's phone number
  date: { type: Date, default: Date.now }, //the date of creation of the user
});

module.exports = mongoose.model("User", userModel);