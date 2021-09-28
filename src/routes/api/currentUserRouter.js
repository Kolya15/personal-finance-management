const {Router} = require('express')
const router = Router()
const userController = require('../../controllers/currentUserController')

router.get('/', userController.getCurrentUser)

module.exports = router