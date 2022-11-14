const express = require("express");
const cartModel = require("../models/cartModel");
const router = express.Router();
const mongoose = require('mongoose');
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

//GET PRODUCTS IN CART BY USER ID
router.get("/getcart/:userid", async (req, res) => {
    try {
        const user_id = mongoose.Types.ObjectId(req.params.userid)
        const cartList = await cartModel.find({
            user_id: user_id
        });
        res.status(200).json({
            cart: cartList,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//ADD PRODUCT TO CART
router.post("/addtocart", async (req, res) => {
    const cart = new cartModel({
        product_id: mongoose.Types.ObjectId(req.body.product_id),
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        quantity: req.body.quantity,
        date: Date.now(),
    });
    try {
        //Verify if product exists
        const productExists = await productModel.findById(cart.product_id)
        if (!productExists) {
            return res.status(401).json({ message: "Producto no existe" });
        }

        //Verify if user exists
        const userExists = await userModel.findById(cart.user_id)
        if (!userExists) {
            return res.status(401).json({ message: "Usuario no existe" });
        }

        await cart.save();
        res.status(200).json({ message: "Producto agregado" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//REMOVE PRODUCT FROM CART
router.delete("/delete/:user_id/:product_id", async (req, res) => {
    try {
        await cartModel.findOneAndDelete({ 
                user_id: req.params.user_id,
                product_id: req.params.product_id
            });
        res.status(200).json({
            result: "Producto se ha quitado del carrito",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;