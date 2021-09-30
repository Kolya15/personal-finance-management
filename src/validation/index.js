const HttpStatusCodes = require('http-status-codes');
const { body, validationResult } = require("express-validator");

class ValidationRules {
    registrationValidationParams = [
        body('userName', 'Name user incorrect').notEmpty(),
        body('password', 'password incorrect').isLength({min:8, max:50})
    ];

    incomeOrExpenseValidationParams = [
        body("amount").isNumeric().withMessage('Field must be numeric'),
        body("categoryId").isMongoId().withMessage('Field must be id format Mongo'),
        body('date').isISO8601().withMessage('Field must be dateTime format'),
        body('description').if((value) => value).isString().withMessage('Field must be string')
            .isLength({min:0, max: 10}).withMessage('Field must be string min - 0, max - 10')
    ];

    updateIncomeOrExpenseValidationParams = [
        body("amount").if((value) => value).isNumeric().withMessage('Field must be numeric'),
        body("categoryId").if((value) => value).isNumeric().withMessage('Field must be numeric'),
        body('date').if((value) => value).isISO8601().withMessage('Field must be dateTime format'),
        body('description').if((value) => value).isString().withMessage('Field must be string')
            .isLength({min:0, max: 10}).withMessage('Field must be string min - 0, max - 10')
    ];

    categoryValidationParams = [
        body('name').isString().withMessage('Field must be string').isLength({min:1, max: 50}).withMessage('Field must be string min - 1, max - 50')
    ];

    checkValidity(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(HttpStatusCodes.BAD_REQUEST)
                .json({ errors: errors.array(), });
        }
        next();
    }
}

module.exports = new ValidationRules()