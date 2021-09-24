const {Router} = require('express')
const {Schema, model} = require('mongoose')
const router = new Router()
const validation = require('../../validation')
const Category = require('../../models/Categories')
const Controller = require('../../controllers/categoriesController')
const expenseCategory = new Controller(Category, model('default_expense_categories', new Schema()))

router.get('/', expenseCategory.getAllCategoriesByUser.bind(expenseCategory))
router.get('/:id', expenseCategory.getCategoryById.bind(expenseCategory))
router.post('/add', validation.categoryValidationParams, validation.checkValidity, expenseCategory.addCategory.bind(expenseCategory))
router.put('/:id', validation.categoryValidationParams, validation.checkValidity, expenseCategory.updateCategory.bind(expenseCategory))
router.delete('/:id', expenseCategory.deleteCategory.bind(expenseCategory))

module.exports = router