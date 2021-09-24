const {Schema, model} = require('mongoose')

const Category = new Schema({
    name: {type: String, required: true},
    userId: {type: String, required: true}
})

module.exports =  model('income_categories', Category)