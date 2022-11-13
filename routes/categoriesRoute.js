const express = require("express");
const categoryModel = require("../models/categoryModel");
const router = express.Router();
//CREATE CATEGORY
router.post("/create", async (req, res) => {
  const category = new categoryModel({
    name: req.body.name,
    username: req.body.username,
    location: req.body.location,
    description: req.body.description,
  });
  try {
    await category.save();
    res.status(200).json({ message: "Category created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ ONE CATEGORY BY CATEGORY ID
router.get("/readOne/:id", async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    res.status(200).json({
      result: category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ ALL CATEGORIES
router.get("/readAll", async (req, res) => {
  try {
    let categorys = await categoryModel.find();
    res.status(200).json({
      result: categorys,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//UPDATE CATEGORY BY CATEGORY ID
router.patch("/update/:id", async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      result: "Category updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE CATEGORY BY CATEGORY ID
router.delete("/delete/:id", async (req, res) => {
  try {
    await categoryModel.findByIdAndDelete({ id: req.params.id });
    res.status(200).json({
      result: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;