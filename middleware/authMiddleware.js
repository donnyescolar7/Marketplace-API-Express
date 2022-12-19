const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

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