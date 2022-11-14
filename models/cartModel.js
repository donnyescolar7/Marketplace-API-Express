const mongoose = require("mongoose");

const cartModel = new mongoose.Schema({
    product_id:{ type: mongoose.Schema.Types.ObjectId, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    quantity: {type: Number, min:1, required:true },
    date: { type: Date, default: Date.now },
});

cartModel.index({"product_id": 1, "user_id" : 1}, { unique: true })

module.exports = mongoose.model("Cart", cartModel);