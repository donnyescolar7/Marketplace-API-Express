const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const productModel = require("../models/productModel");
const mongoose = require('mongoose');
const router = express.Router();
//CREATE PRODUCT
router.post("/create", verifyToken, async (req, res) => {
  const product = new productModel({
    description: req.body.description,
    price: req.body.price,
    brand: req.body.brand,
    category: req.body.category,
  });
  try {
    await product.save();
    res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ ONE PRODUCT BY PRODUCT ID
router.get("/readOne/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        result: "Product not found"
      })
    }

    return res.status(200).json({
      result: product,
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ ALL PRODUCTS
router.get("/readAll", async (req, res) => {
  try {
    let products = await productModel.find();
    res.status(200).json({
      result: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//UPDATE PRODUCT BY PRODUCT ID
router.patch("/update/:id", verifyToken, async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      result: "Product updated successfully",
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
//DELETE PRODUCT BY PRODUCT ID
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    await productModel.findByIdAndDelete({ _id: mongoose.Types.ObjectId(req.params.id) });
    res.status(200).json({
      result: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;