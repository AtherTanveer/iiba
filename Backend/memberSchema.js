const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    company:String,
})

module.exports = mongoose.model("uttarpardeshMember",memberSchema);