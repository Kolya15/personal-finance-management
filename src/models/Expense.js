const {Schema, model} = require('mongoose')

const Expense = new Schema({
    amount: {type: Number, required: true},
    userId: {type: String, required: true},
    description: {type: String},
    categoryId: {type: String, required: true},
    date: {type: Date, default: Date.now(), required: true}
})

module.exports  =  model('Expense', Expense)