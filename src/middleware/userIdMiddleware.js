const jwt = require("jsonwebtoken")
const config = require('../config')

const getUserId = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        req.user = jwt.verify(token, config.jwt.secretKey);
        console.log(req.user)
        return next();
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }

};

module.exports = getUserId;