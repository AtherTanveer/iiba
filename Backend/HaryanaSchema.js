const mongoose = require("mongoose");

const Haryana_Schema = mongoose.Schema({
    name:String,
    email:{type:String, unique:true},
    phone:{type:Number, unique:true},
    state:String,
    district:String,
    city:String,
    address:String,
    company:String,
})

module.exports = mongoose.model("haryanamember",Haryana_Schema);