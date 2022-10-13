

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    age : {
        type : String,
        required: true
    },
    mobile : {
        type : Number,
        required: true
    },
    work : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    desc : {
        type : String,
        required: true
    }
})

const user = new mongoose.model("user",UserSchema);
module.exports = user;

