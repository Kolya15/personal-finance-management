const {Router} = require('express')
const router = new Router()
const incomeController = require('../../controllers/incomeController')
const validation = require('../../validation')
const {check} = require('express-validator')

router.get('/', incomeController.getAllIncomeByUser)

router.get('/:id', incomeController.getIncomeById)

router.post('/add', validation.incomeValidationParams, validation.checkValidity, incomeController.addIncome)

router.put('/:id', validation.updateIncomeValidationParams, validation.checkValidity, incomeController.updateIncome)

router.delete('/:id', incomeController.deleteIncome)


module.exports = router