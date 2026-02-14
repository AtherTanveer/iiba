const mongoose = require("mongoose");

const UserHrSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    state:String,
    district:String,
    city:String,
    address:String,
    company:String,
})

module.exports = mongoose.model("HrRequests",UserHrSchema);