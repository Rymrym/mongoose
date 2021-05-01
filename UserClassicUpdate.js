

let UserModel = require('./src/userModel')
const url = `mongodb+srv://rym:rym1234@mycluster.7ksct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const mongoose = require('mongoose')
//const { ObjectId } = require('bson')
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


// let arrayOfPeople = [{ name: 'Kaouther', age: 26, favoriteFoods: ["Lasagne", "Burger", "Ice cake"] }, { name: "Dude", age: 28, favoriteFoods: ["Meat"] }, { name: "Zazzou", age: 1, favoriteFoods: ["Bread", "Fish"] }]

     UserModel.findById({_id : '60853b7520b522387c005c1b'})

     .then(function (docs) {
        docs.favoriteFoods.push("Hamburger")
        docs.save()
        console.log(docs)


 })
    .catch(err => {
        console.error(err)
 });
    


