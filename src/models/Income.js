const {Schema, model} = require('mongoose')

const Income = new Schema({
    amount: {type: Number, required: true},
    userId: {type: String, required: true},
    text: {type: String},
    categoryId: {type: Number, required: true},
    date: {type: Date, default: Date.now(), required: true}
})

module.exports =  model('Income', Income)