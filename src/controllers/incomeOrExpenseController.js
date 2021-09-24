const User = require('../models/User')

const updateUserBalance = async (req, amount) => {
    const userId = req.user.id
    const {currentBalance} = await User.findById(userId)
    const newCurrentBalance = currentBalance + +amount
    return await User.findByIdAndUpdate(userId, {currentBalance: newCurrentBalance}, {new: true});
}

module.exports = class incomeController {
    constructor(model) {
        this.model = model
    }

    async add(req, res){
        try{
            const {amount, description, categoryId, date} = req.body
            const newIncome = new this.model({amount, description, categoryId, date, userId: req.user.id})
            await newIncome.save()
            const user = await updateUserBalance(req, this.model.modelName === 'Income'? amount : -(amount))
            return res.json({user, newIncome})
        }catch(e) {
            console.log(e)
        }
    }

    async getAllByUser(req, res) {
        try{
            const userId = req.user.id
            const income = await this.model.find({userId})
            return res.json({income})
        } catch (e) {
            console.log(e)
        }
    }

    async getById(req, res) {
        try{
            const {id} = req.params
            const income = await this.model.findById(id)
            return res.json({income})
        } catch (e) {
            console.log(e)
        }
    }

    async update(req, res) {
        try{
            const {id} = req.params
            const data = req.body
            const {amount} =  await this.model.findById(id)
            const difference = this.model.modelName === 'Income' ? -(amount - data.amount) : amount - data.amount
            const transaction = await this.model.findByIdAndUpdate(id, data, { new: true})
            const user =  await updateUserBalance(req, difference)
            // const income = await this.model.findByIdAndUpdate(id, data, { new: true})

            // const user = await updateUserBalance()
            return res.json({transaction, user})
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try{
            const {id} = req.params
            const income = await this.model.findByIdAndDelete(id)
            return res.json({income})
        } catch (e) {
            console.log(e)
        }
    }

    async getByDate(req, res) {
        try {
            const {from, to} = req.body
            // const userId = req.user.id
            const data = await this.model.find({ date: { $gte: from, $lt: to }})
            return res.json({data})
        } catch (e) {
            console.log(e)
        }
    }

}
