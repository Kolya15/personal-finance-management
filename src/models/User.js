const {Schema, model} = require('mongoose')

const User = new Schema({
    userName: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    currentBalance: {type: Number, default: 0}
})


module.exports = model('User', User)