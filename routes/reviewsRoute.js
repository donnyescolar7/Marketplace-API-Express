const express = require("express");
const reviewModel = require("../models/reviewModel");
const router = express.Router();
//CREATE REVIEW
router.post("/create", async (req, res) => {
  const review = new reviewModel({
    name: req.body.name,
    username: req.body.username,
    location: req.body.location,
    description: req.body.description,
  });
  try {
    await review.save();
    res.status(200).json({ message: "Review created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ ONE REVIEW BY REVIEW ID
router.get("/readOne/:id", async (req, res) => {
  try {
    const review = await reviewModel.findById(req.params.id);
    res.status(200).json({
      result: review,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ ALL REVIEWS
router.get("/readAll", async (req, res) => {
  try {
    let reviews = await reviewModel.find();
    res.status(200).json({
      result: reviews,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE REVIEW BY REVIEW ID
router.delete("/delete/:id", async (req, res) => {
  try {
    await reviewModel.findByIdAndDelete({ id: req.params.id });
    res.status(200).json({
      result: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;