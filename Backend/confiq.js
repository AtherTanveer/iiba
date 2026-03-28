const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://athertanveer6:iiba%40123@iiba-db.hzokhm9.mongodb.net/?appName=iiba-db"
)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));