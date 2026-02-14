const express = require("express");
const app = express();

require("./confiq");
app.use(express.json());

const cors = require("cors");

app.use(cors());

const admin = require("./AdminPss");
const memberData = require("./memberSchema");
const userRequest = require("./UserSchema")
const haryanaData = require("./HaryanaSchema");
const HrRequest = require("./UserHrSchema");

app.post("/addMember", async (req, res) => {
    try {
        const data = await memberData.insertOne(req.body);
        const result = await data.save();
        console.log(result);
        res.send(result);

    } catch (err) {
        console.log(err, "try again")
    }

})

app.get("/getMember", async (req, res) => {
    const data = await memberData.find({});
    console.log(data);
    res.send(data);
})

app.put("/updatemember/:id", async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const update = { $set: req.body };

        const data = await memberData.updateOne(filter, update);
        console.log(data);
        res.send(data);

    } catch (err) {
        console.log(err)
    }

})

app.get("/goUpdate/:id", async (req, res) => {
    const update = { _id: req.params.id }

    try {
        const data = await memberData.findOne(update);
        if (data) {
            console.log("data was match ");
            console.log(data)
            res.send(data);
        }
        else {
            console.log("check and retry - ");
            res.send("data invalid")
        }

    }

    catch (err) {
        console.log(err)
        res.send("data invalid")
    }


})

app.delete("/deleteMember/:id", async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const data = await memberData.deleteOne(filter)
        if (data) {
            console.log(data);
            res.send(data);

        } else {
            console.log("input was not match");
            res.send("data not match")
        }
    } catch (err) {
        console.log(err)
        res.send("something went wrong")
    }

})



// -------->Admin CODE START ----------<
app.post("/adminPost", async (req, res) => {
    const data = await admin.insertOne(req.body)
    const result = await data.save();

    if (result) {
        console.log(result);
        res.send(result);
    }
})

app.post("/Uttrakhnd_adminLogin", async (req, res) => {
    console.log(req.body)
    const validUserID = "uttrakhand708"
    const validPass = "uttra783"

    if (req.body.userID == validUserID && req.body.password == validPass) {
        const data = await admin.findOne(req.body);
        if (req.body) {
            res.send(data);
            console.log(data)
        }
        else {
            res.send("Something Went Wrong")
        }

    } else {
        console.log("user id & password wrong");
        res.send(false)
    }

})


// ------>>>>Hr<<<<<
app.post("/HRadminPost", async (req, res) => {
    const data = await admin.insertOne(req.body)
    const result = await data.save();

    if (result) {
        console.log(result);
        res.send(result);
    }
})

app.post("/Hariyana_adminLogin", async (req, res) => {
    console.log(req.body)
    const validUserID = "hariyana098"
    const validPass = "hariyana"

    if (req.body.userID == validUserID && req.body.password == validPass) {
        const data = await admin.findOne(req.body);
        if (req.body) {
            res.send(data);
            console.log(data)
        }
        else {
            res.send("Something Went Wrong")
        }

    } else {
        console.log("user id & password wrong");
        res.send(false)
    }

})
//--------> Admin CODE END




// --------> User CODE START
app.post("/userRequest", async (req, res) => {
    const data = await userRequest.insertOne(req.body);
    const result = await data.save();
    console.log(result)
    res.send(result);
})

app.get("/getuser", async (req, res) => {
    const data = await userRequest.find({});
    if (data) {
        res.send(data);
        console.log(data);
    } else {
        res.send(false);
        console.log("invalid data")
    }

})

app.delete("/deleteRequest/:id", async (req, res) => {
    const deleteRQ = { _id: req.params.id }
    try {
        const data = await userRequest.deleteOne(deleteRQ)
        console.log(data)
        res.send(data);
    } catch (err) {
        console.log("something went wrong")
        res.send(false)
    }
})

app.post("/findUser/:id", async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const data = await userRequest.findOne(filter);
        if (data) {
            console.log(data);
            res.send(data);
        }
        else{
            console.log("no data ")
            res.send("no data exist")
        }

    } catch (err) {
        console.log(err)
        res.send(false)
    }


})
// -------->  User CODE END






// >------------------------------>Haryana Start<-------------------------------<
    app.post("/Add_Haryana_Member",async(req,res)=>{
        const data = await haryanaData.insertOne(req.body)
        const result = await data.save();
        if(result){
            res.send(result);
            console.log(result);
        }
    })

    app.get("/get_Haryana_member",async(req,res)=>{
        const data = await haryanaData.find({});
        if(data){
            res.send(data);
            console.log(data);
        }
    })

    app.get("/goHaryanaUpdate/:id", async (req, res) => {
    const update = { _id: req.params.id }

    try {
        const data = await haryanaData.findOne(update);
        if (data) {
            console.log("data was match ");
            console.log(data)
            res.send(data);
        }
        else {
            console.log("check and retry - ");
            res.send("data invalid")
        }

    }

    catch (err) {
        console.log(err)
        res.send("data invalid")
    }


})

    app.put("/update_Haryana_Member/:id", async(req,res)=>{
          const filter = {_id: req.params.id}
        const update = { $set: req.body}
        try{
             const data = await haryanaData.updateOne(filter,update);
        if(data){
            console.log(data);
            res.send(data);
        }else{
            console.log("data not see")
            res.send(false)
        }

        }catch(err){
            console.log(err)
            res.send(false)
        }
      
       
    })

    app.delete("/Delete_Haryana_Member/:id",async (req,res) => {
        const data = await haryanaData.deleteOne({_id: req.params.id});
        if(data){
            console.log(data);
            res.send(data);
        }else{
            console.log("data not match")
            res.send(false);
        }
    })
// >------------------------------>Haryana END<-------------------------------<
// --------> User HR CODE START
app.post("/userHRRequest", async (req, res) => {
    const data = await HrRequest.insertOne(req.body);
    const result = await data.save();
    console.log(result)
    res.send(result);
})

app.get("/getHRuser", async (req, res) => {
    const data = await HrRequest.find({});
    if (data) {
        res.send(data);
        console.log(data);
    } else {
        res.send(false);
        console.log("invalid data")
    }

})

app.delete("/deleteHRRequest/:id", async (req, res) => {
    const deleteRQ = { _id: req.params.id }
    try {
        const data = await HrRequest.deleteOne(deleteRQ)
        console.log(data)
        res.send(data);
    } catch (err) {
        console.log("something went wrong")
        res.send(false)
    }
})

app.post("/findHRUser/:id", async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const data = await HrRequest.findOne(filter);
        if (data) {
            console.log(data);
            res.send(data);
        }
        else{
            console.log("no data ")
            res.send("no data exist")
        }

    } catch (err) {
        console.log(err)
        res.send(false)
    }


})
// -------->  User HR CODE END

    


app.listen(4500)