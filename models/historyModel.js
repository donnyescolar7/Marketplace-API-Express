const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

const historyModel = new mongoose.Schema({
  user_id: { type: ObjectId, required: true },
  products: { type: [mongoose.Schema.Types.Mixed ], default: [] },
  total: {type: Number, required: true},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("History", historyModel);