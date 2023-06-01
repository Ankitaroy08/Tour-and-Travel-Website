const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://ankitaroy0807:Ankita%40-%2B@cluster0.c9edoze.mongodb.net/customers"

//connecting to mongoose
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connect to mongo  successfully")
    })
}
module.exports = connectToMongo;