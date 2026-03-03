const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
    title:String,
    category:String,
    date:String,
    description:String,
    image:String,
})

module.exports = mongoose.model("News",newsSchema)