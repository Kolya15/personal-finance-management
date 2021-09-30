const {Router} = require('express')
const router = Router()
const userController = require('../../controllers/usersController')

router.get('/all', userController.getAllUsers)

module.exports = router