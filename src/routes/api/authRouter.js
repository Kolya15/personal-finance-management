const {Router} = require('express')
const router = new Router()
const controller = require('../../controllers/authController.js')
const {check} = require('express-validator')


router.post('/registration', [
    check('userName', 'Name user incorrect').notEmpty(),
    check('password', 'password incorrect').isLength({min:8, max:50})
    ],
    controller.registration)

router.post('/login', controller.login)

module.exports = router