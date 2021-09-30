const {Router} = require('express')
const router = new Router()
const validation = require('../../../validation')
const Controller = require('../../../controllers/incomeOrExpenseController')
const IncomeModel = require('../../../models/Income')
const incomeController = new Controller(IncomeModel)

router.get('/', incomeController.getAllByUser.bind(incomeController))

router.get('/:id', incomeController.getById.bind(incomeController))

router.post('/add', validation.incomeOrExpenseValidationParams, validation.checkValidity, incomeController.add.bind(incomeController))

router.put('/:id', validation.updateIncomeOrExpenseValidationParams, validation.checkValidity, incomeController.update.bind(incomeController))

router.delete('/:id', incomeController.delete.bind(incomeController))

router.post('/get-by-date', validation.checkValidity, incomeController.getByDate.bind(incomeController))


module.exports = router