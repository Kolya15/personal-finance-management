const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('../config')
const generateAccessToken = (id) => {
    const payload = {
        id
    }

    return jwt.sign(payload, config.jwt.secretKey, {expiresIn: config.jwt.expires})
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'User error',errors})
            }
            const {userName, password} = req.body
            const candidate = await User.findOne({userName})
            if(candidate) {
                return res.status(400).json({message: 'User duplicate'})
            }
            const user = new User({userName: userName, password: bcrypt.hashSync(password, 7)})
            await user.save().then(newUser => console.log(newUser));
            const token = generateAccessToken(user._id)
            return res.json({token})
        } catch (e){
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {userName, password} = req.body
            const user = await User.findOne({userName})
            if (!user) {
                return res.status(400).json({message: 'User not found'})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'User password incorrect'})
            }
            const token = generateAccessToken(user._id)
            return res.json({token})
        } catch (e){
            res.status(400).json({message: 'Login error'})
        }
    }

    async allUsers(req, res) {
        try {
            res.json('allUsers')
        } catch (e){

        }
    }
}

module.exports = new authController()