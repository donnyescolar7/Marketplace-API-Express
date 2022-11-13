const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const pathWithAuth = [
        '/users/update',
        '/users/delete',
        '/products/create',
        '/products/update',
        '/products/delete',
        '/reviews/create',
        '/reviews/delete',
        '/categories/create',
        '/categories/update',
        '/categories/delete',
    ]

    const count = pathWithAuth.reduce((p,c)=>p+(req.originalUrl.includes(c)), 0)

    if(count == 0) return next();

    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Token nulo' })
    try {
        const verified = jwt.verify(token, "secret")
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({error: 'Token no es válido'})
    }
}

module.exports = verifyToken;