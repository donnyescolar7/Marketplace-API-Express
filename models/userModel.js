const mongoose = require("mongoose");
//const ObjectId = require("mongodb").ObjectId;

const userModel = new mongoose.Schema({
  name: { type: String, required: true }, //name displayed on screen
  username: { type: String, required: true }, //unique username
  location: { type: String, default: "" }, //where the user lives
  description: { type: String, default: "" }, //a brief description of the user
  date: { type: Date, default: Date.now }, //the date of creation of the user
  password: { type: String, min:6, require:true}
});

module.exports = mongoose.model("User", userModel);