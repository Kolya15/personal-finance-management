const {Router} = require('express')
const {Schema, model} = require('mongoose')
const router = new Router()
const validation = require('../../validation')
const Category = require('../../models/Categories')
const Controller = require('../../controllers/categoriesController')
const incomeCategory = new Controller(Category, model('default_income_categories', new Schema()))

router.get('/', incomeCategory.getAllCategoriesByUser.bind(incomeCategory))
router.get('/:id', incomeCategory.getCategoryById.bind(incomeCategory))
router.post('/add', validation.categoryValidationParams, validation.checkValidity, incomeCategory.addCategory.bind(incomeCategory))
router.put('/:id', validation.categoryValidationParams, validation.checkValidity, incomeCategory.updateCategory.bind(incomeCategory))
router.delete('/:id', incomeCategory.deleteCategory.bind(incomeCategory))

module.exports = router