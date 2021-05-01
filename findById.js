let UserModel = require('./src/userModel')
const url = `mongodb+srv://rym:rym1234@mycluster.7ksct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const mongoose = require('mongoose')
//const { ObjectId } = require('bson')
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
const { ObjectId } = require('mongodb');
const _id = ObjectId("60853b7520b522387c005c1c");
const newUsers = UserModel.findById({ _id})

    .then(function (docs) {
        console.log(docs);

    })
    .catch(err => {
        console.error(err)
    });