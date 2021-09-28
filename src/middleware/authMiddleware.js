const jwt = require("jsonwebtoken")
const config = require('../config')


const verifyToken = (req, res, next) => {
    try {
        if(req.method === 'OPTIONS' || req.baseUrl.includes('auth')) {
            return next();
        }
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        req.user = jwt.verify(token, config.jwt.secretKey);
        return next();
    } catch (err) {
        return res.status(401).send({message: "Unauthorized"});
    }

};

module.exports = verifyToken;