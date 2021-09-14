const {Router} = require('express')
const router = new Router()
const incomeController = require('../../controllers/incomeController')
const {check} = require('express-validator')
router.post('/create', [
    check('amount').isNumeric(),
    check('categoryId').isNumeric(),
    check('date').isDate(),
    // check('text').isLength({min:1, max:255})
    ],
    incomeController.createIncome
)

module.exports = router