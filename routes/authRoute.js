const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const router = require('./categoriesRoute');

router.post('/login', async (req, res) => {
    
    // validaciones
    const usuario = await userModel.findOne({
        email: req.body.email
    })

    if(!usuario){
        res.status(200).json({ message: "Usuario no existe" })
        return
    }

    if(usuario.password != req.body.password){
        res.status(404).json({ message: "Contraseña Incorrecta" })
        return
    }

    // create tokend
    const token = jwt.sign({
        id: usuario._id,
    }, "secret")
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
})

module.exports = router;