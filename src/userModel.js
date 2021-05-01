
let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]

})

module.exports = mongoose.model('user', userSchema)