const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const router = require('./categoriesRoute');

router.post('/login', async (req, res) => {
    // validaciones
    /*const usuario = userModel.findOne({
        username: req.body.username
    })*/

    const usuario = {
        username: "donny",
        password: "123456"
    }

    if(usuario.password != req.body.password){
        res.status(200).json({ message: "Contraseña Incorrecta" })
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