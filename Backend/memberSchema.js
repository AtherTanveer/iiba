const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
   name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match:[/^\S+@\S+\.\S+$/,'Please use a valid email']
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    state:{type:String, trim:true},
    district:{type:String, trim:true},
    city:{type:String, trim:true},
    address:{type:String, trim:true},
    company:{type:String, trim:true},
    image:{
        type:String,
        default:"default.png"
    }
},{
    timestamps:true
}
)

module.exports = mongoose.model("uttrakhandMember",memberSchema);