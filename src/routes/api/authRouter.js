const {Router} = require('express')
const router = new Router()
const controller = require('../../controllers/authController.js')
const validation = require('../../validation')


router.post('/registration', validation.registrationValidationParams, validation.checkValidity,
    controller.registration)

router.post('/login', controller.login)

module.exports = router