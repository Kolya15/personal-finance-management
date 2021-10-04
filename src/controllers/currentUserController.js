const UserModels = require('../models/User')
const Incomes = require('../models/Income')
const Expense = require('../models/Expense')

class User {
    async getCurrentUser(req, res) {
        try {
            let user = JSON.parse(JSON.stringify(await UserModels.findById(req.user.id)))
            const {lastIncomes, lastExpenses} = await this.lastIncomesAndExpenses(req.user.id)
            user.lastIncomes = lastIncomes
            user.lastExpenses = lastExpenses
            return res.json({user})
        } catch (e) {
            console.log(e)
        }
    }

    async lastIncomesAndExpenses(userId) {
        try {
            const lastIncomes = await Incomes.find({userId}).sort({date:-1}).limit(5)
            const lastExpenses = await Expense.find({userId}).sort({date:-1}).limit(5)
            return {lastIncomes, lastExpenses}
        } catch (e) {
            console.log(e)
        }
    }

    async updateUserBalance(userId, amount) {
        console.log(userId, amount)
        const {currentBalance} = await UserModels.findById(userId)
        const newCurrentBalance = currentBalance + +amount
        const updateUser = await UserModels.findByIdAndUpdate(userId, {currentBalance: newCurrentBalance.toFixed(1)}, {new: true});
        const {lastIncomes, lastExpenses} = await this.lastIncomesAndExpenses(userId)
        updateUser.lastIncomes = lastIncomes
        updateUser.lastExpenses = lastExpenses
        console.log(updateUser)
        return updateUser
    }
}

module.exports = new User()