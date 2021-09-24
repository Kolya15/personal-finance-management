const {Router} = require('express')
const router = new Router()
const expenseController = require('../../controllers/expenseController')
const validation = require('../../validation')
const {check} = require('express-validator')

router.get('/', expenseController.getAllExpenseByUser)

router.get('/:id', expenseController.getExpenseById)

router.post('/add', validation.expenseValidationParams, validation.checkValidity, expenseController.addExpense)

router.put('/:id', validation.updateExpenseValidationParams, validation.checkValidity, expenseController.updateExpense)

router.delete('/:id', expenseController.deleteExpense)


module.exports = router