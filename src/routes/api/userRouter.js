const {Router} = require('express')
const router = Router()
const userController = require('../../controllers/userController')

router.get('/all', userController.getAllUsers)

module.exports = router