const Income = require('../models/Income')
const {validationResult} = require('express-validator')

class incomeController {

    async createIncome(req, res){
        try{
            console.log(req.user)
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'User error',errors})
            }
            const {amount, text, categoryId, date} = req.body
            const newIncome = new Income({amount, text, categoryId, date, userId: req.user.id})

            await newIncome.save()
            return res.json({newIncome})
        }catch(e) {
            console.log(e)
        }
    }
}

module.exports = new incomeController()