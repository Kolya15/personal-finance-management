const Income = require('../models/Income')


class incomeController {
    async addIncome(req, res){
        try{
            const {amount, description, categoryId, date} = req.body
            const newIncome = new Income({amount, description, categoryId, date, userId: req.user.id})

            await newIncome.save()
            return res.json({data: newIncome})
        }catch(e) {
            console.log(e)
        }
    }

    async getAllIncomeByUser(req, res) {
        try{
            const userId = req.user.id
            const income = await Income.find({userId})
            return res.json({income})
        } catch (e) {
            console.log(e)
        }
    }

    async getIncomeById(req, res) {
        try{
            const {id} = req.params
            const income = await Income.findById(id)
            return res.json({income})
        } catch (e) {
            console.log(e)
        }
    }

    async updateIncome(req, res) {
        try{
            const {id} = req.params
            const data = req.body
            const income = await Income.findByIdAndUpdate(id, data, { new: true})
            return res.json({income})
        } catch (e) {
            console.log(e)
        }
    }

    async deleteIncome(req, res) {
        try{
            const {id} = req.params
            const income = await Income.findByIdAndDelete(id)
            return res.json({income})
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new incomeController()