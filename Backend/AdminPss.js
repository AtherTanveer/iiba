const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
    userID:{type:String, unique:true},
    password:String
})

module.exports = mongoose.model("admin",memberSchema);