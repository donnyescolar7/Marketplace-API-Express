const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const reviewModel = require("../models/reviewModel");
const router = express.Router();
//CREATE REVIEW
router.post("/create", verifyToken, async (req, res) => {
  const review = new reviewModel({
    user: req.body.user,
    product: req.body.product,
    stars: req.body.stars,
    comment: req.body.comment,
    text: req.body.text,
  });
  try {
    const doc = await review.save();
    res.status(200).json({ message: "Review created successfully", data: doc });
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
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    await reviewModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      result: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;