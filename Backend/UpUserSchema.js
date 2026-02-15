const mongoose = require("mongoose");

const UserUpSchema = mongoose.Schema({
    name:String,
    email:{type:String, unique:true},
    phone:{type:Number, unique:true},
    state:String,
    district:String,
    city:String,
    address:String,
    company:String,
})

module.exports = mongoose.model("up_requests",UserUpSchema);