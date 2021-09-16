const HttpStatusCodes = require('http-status-codes');
const { body, validationResult } = require("express-validator");

class ValidationRules {
    registrationValidationParams = [
        body('userName', 'Name user incorrect').notEmpty(),
        body('password', 'password incorrect').isLength({min:8, max:50})
    ];

    incomeValidationParams = [
        body("amount").isNumeric().withMessage('Field must be numeric'),
        body("categoryId").isNumeric().withMessage('Field must be numeric'),
        body('date').isISO8601().withMessage('Field must be dateTime format'),
        body('description').if((value) => value).isString().withMessage('Field must be string')
            .isLength({min:0, max: 10}).withMessage('Field must be string min - 0, max - 10')
    ];

    updateIncomeValidationParams = [
        body("amount").if((value) => value).isNumeric().withMessage('Field must be numeric'),
        body("categoryId").if((value) => value).isNumeric().withMessage('Field must be numeric'),
        body('date').if((value) => value).isISO8601().withMessage('Field must be dateTime format'),
        body('description').if((value) => value).isString().withMessage('Field must be string')
            .isLength({min:0, max: 10}).withMessage('Field must be string min - 0, max - 10')
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