
const {URL} = require("./envConfig");
const mongoose = require("mongoose");

const connect = async() =>{
    try {
        await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
        console.log("DB connection successful");
    } catch (error) {
        console.log("DB connection failed");
        console.log(error.message);
    }
}

module.exports = connect;