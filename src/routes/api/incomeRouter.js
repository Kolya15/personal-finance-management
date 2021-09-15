const {Router} = require('express')
const router = new Router()
const incomeController = require('../../controllers/incomeController')
const {check} = require('express-validator')
router.post('/add', [
    check('amount').isNumeric().withMessage('Field must be numeric'),
    check('categoryId').isNumeric().withMessage('Field must be numeric'),
    check('date').isISO8601().withMessage('Field must be dateTime format'),
    check('text').if((value) => value).isString().withMessage('Field must be string')
        .isLength({min:0, max: 10}).withMessage('Field must be string min - 0, max - 10')
    ],
    incomeController.addIncome
)

module.exports = router