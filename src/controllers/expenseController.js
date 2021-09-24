const Expense = require('../models/Expense')

class expenseController {
    async addExpense(req, res){
        try{
            const {amount, description, categoryId, date} = req.body
            const newExpense = new Expense({amount, description, categoryId, date, userId: req.user.id})

            await newExpense.save()
            return res.json({data: newExpense})
        }catch(e) {
            console.log(e)
        }
    }

    async getAllExpenseByUser(req, res) {
        try{
            const userId = req.user.id

            const expense = await Expense.find({userId})
            return res.json({expense})
        } catch (e) {
            console.log(e)
        }
    }

    async getExpenseById(req, res) {
        try{
            const {id} = req.params
            const expense = await Expense.findById(id)
            return res.json({expense})
        } catch (e) {
            console.log(e)
        }
    }

    async updateExpense(req, res) {
        try{
            const {id} = req.params
            const data = req.body
            const expense = await Expense.findByIdAndUpdate(id, data, { new: true})
            return res.json({expense})
        } catch (e) {
            console.log(e)
        }
    }

    async deleteExpense(req, res) {
        try{
            const {id} = req.params
            const expense = await Expense.findByIdAndDelete(id)
            return res.json({expense})
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new expenseController()