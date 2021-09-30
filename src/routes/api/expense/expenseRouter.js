const {Router} = require('express')
const router = new Router()
const validation = require('../../../validation')
const Controller = require('../../../controllers/incomeOrexpenseController')
const ExpenseModel = require('../../../models/Expense')
const expenseController = new Controller(ExpenseModel)

router.get('/', expenseController.getAllByUser.bind(expenseController))

router.get('/:id', expenseController.getById.bind(expenseController))

router.post('/add', validation.incomeOrExpenseValidationParams, validation.checkValidity, expenseController.add.bind(expenseController))

router.put('/:id', validation.updateIncomeOrExpenseValidationParams, validation.checkValidity, expenseController.update.bind(expenseController))

router.delete('/:id', expenseController.delete.bind(expenseController))

router.post('/get-by-date', validation.checkValidity, expenseController.getByDate.bind(expenseController))


module.exports = router