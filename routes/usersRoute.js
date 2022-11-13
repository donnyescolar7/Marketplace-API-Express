const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
//CREATE USER
router.post("/create", async (req, res) => {
  const user = new userModel({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  });
  try {
    await user.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ ONE USER BY USER ID
router.get("/readOne/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).select('-password');
    res.status(200).json({
      result: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//READ ALL USERS
router.get("/readAll", async (req, res) => {
  try {
    let users = await userModel.find().select('-password');
    res.status(200).json({
      result: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//UPDATE USER BY USER ID
router.patch("/update/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      result: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//DELETE USER BY USER ID
router.delete("/delete/:id", async (req, res) => {
  try {
    await userModel.findByIdAndDelete({ id: req.params.id });
    res.status(200).json({
      result: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;