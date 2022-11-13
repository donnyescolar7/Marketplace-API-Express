const express = require('express');
/*const tweet = require('../models/tweet');
const usuario = require('../models/usuario');
const vinculo = require('../models/vinculo');
const like = require('../models/like');*/

const router = express.Router()

//Get all Method
router.get('/hola', async (req, res) => {
    try {
        //const data = await usuario.find();
        //res.json(data)
        res.json({mensaje: 'holaaaaaa'})
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;