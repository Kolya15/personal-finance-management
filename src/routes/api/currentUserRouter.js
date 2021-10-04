const {Router} = require('express')
const router = Router()
const userController = require('../../controllers/currentUserController')

router.get('/', userController.getCurrentUser.bind(userController))
router.get('/last-incomes-and-expenses', userController.lastIncomesAndExpenses)

module.exports = router