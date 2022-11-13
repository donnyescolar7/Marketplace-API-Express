const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const pathWithAuth = [
        '/users/update/',
        '/users/delete/',
    ]

    //return res.status(401).json({path: req.path })

    const count = pathWithAuth.reduce((p,c)=>p+(req.path.includes(c)), 0)

    console.log(req);

    if(count == 0) return next();

    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Token nulo' })
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({error: 'Token no es válido'})
    }
}

module.exports = verifyToken;