const mongoose = require("mongoose");

const UserHrSchema = mongoose.Schema({
    name:String,
    email:{type:String, unique:true},
    phone:{type:Number, unique:true},
    state:String,
    district:String,
    city:String,
    address:String,
    company:String,
    image:String
})

module.exports = mongoose.model("HrRequests",UserHrSchema);