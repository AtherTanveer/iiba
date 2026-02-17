const express = require("express");
const app = express();

require("./confiq");
app.use(express.json());

const cors = require("cors");

app.use(cors());
app.use("/uploads", express.static("uploads"));

const admin = require("./AdminPss");
const memberData = require("./memberSchema");
const userRequest = require("./UserSchema");
const haryanaData = require("./HaryanaSchema");
const HrRequest = require("./UserHrSchema");
const UttarparadeshData = require("./UttarparadeshSchema");
const UPrequest = require("./UpUserSchema");
const upload = require("./MulterConfiq");

app.post("/addMember", upload.single("image"), async (req, res) => {
    try {
        const newMember = new memberData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: req.file ? req.file.filename : "",
        });

        const result = await newMember.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }

})

app.get("/getMember", async (req, res) => {
    const data = await memberData.find({});
    console.log(data);
    res.send(data);
})

app.put("/updatemember/:id", upload.single("image"), async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const update = {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                state: req.body.state,
                district: req.body.district,
                city: req.body.city,
                address: req.body.address,
                company: req.body.company,
                image: req.file ? req.file.filename : req.file,
            }
        };

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

// -------->>UP<<---------

app.post("/UttarParadesh_adminLogin", async (req, res) => {
    console.log(req.body)
    const validUserID = "uttarparadesh745"
    const validPass = "uttarparadesh56"

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
        else {
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
app.post("/Add_Haryana_Member", upload.single("image"), async (req, res) => {
    try {
        const newMember = new haryanaData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: req.file ? req.file.filename : "",
        });

        const result = await newMember.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
})

app.get("/get_Haryana_member", async (req, res) => {
    const data = await haryanaData.find({});
    if (data) {
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

app.put("/update_Haryana_Member/:id", upload.single("image"), async (req, res) => {
    const filter = { _id: req.params.id }
    const update = {
        $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: req.file ? req.file.filename : req.file,
        }
    };
    try {
        const data = await haryanaData.updateOne(filter, update);
        if (data) {
            console.log(data);
            res.send(data);
        } else {
            console.log("data not see")
            res.send(false)
        }

    } catch (err) {
        console.log(err)
        res.send(false)
    }


})

app.delete("/Delete_Haryana_Member/:id", async (req, res) => {
    const data = await haryanaData.deleteOne({ _id: req.params.id });
    if (data) {
        console.log(data);
        res.send(data);
    } else {
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
        else {
            console.log("no data ")
            res.send("no data exist")
        }

    } catch (err) {
        console.log(err)
        res.send(false)
    }


})
// -------->  User HR CODE END








// --------------->>>Uttarparadesh Start<<<-------------
app.post("/Add_Uttarparadesh_Member", upload.single("image"),async (req, res) => {
    try {
        const newMember = new UttarparadeshData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: req.file ? req.file.filename : "",
        });

        const result = await newMember.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
})

app.get("/get_Uttarparadesh_member", async (req, res) => {
    const data = await UttarparadeshData.find({});
    if (data) {
        res.send(data);
        console.log(data);
    }
})

app.get("/goUttarparadeshUpdate/:id", async (req, res) => {
    const update = { _id: req.params.id }

    try {
        const data = await UttarparadeshData.findOne(update);
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

app.put("/update_Uttarparadesh_Member/:id", upload.single("image"),async (req, res) => {
    const filter = { _id: req.params.id }
    const update = {
        $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: req.file.filename,
            image: req.file ? req.file.filename : req.file,
        }
    };

    try {
        const data = await UttarparadeshData.updateOne(filter, update);
        if (data) {
            console.log(data);
            res.send(data);
        } else {
            console.log("data not see")
            res.send(false)
        }

    } catch (err) {
        console.log(err)
        res.send(false)
    }


})

app.delete("/Delete_Uttarparadesh_Member/:id", async (req, res) => {
    const data = await UttarparadeshData.deleteOne({ _id: req.params.id });
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        console.log("data not match")
        res.send(false);
    }
})
// --------------->>>UP END<<<----------<<
// ----------------->UpRequest<-------<
app.post("/userUpRequest", async (req, res) => {
    const data = await UPrequest.insertOne(req.body);
    const result = await data.save();
    console.log(result)
    res.send(result);
})

app.get("/getUpUser", async (req, res) => {
    const data = await UPrequest.find({});
    if (data) {
        res.send(data);
        console.log(data);
    } else {
        res.send(false);
        console.log("invalid data")
    }

})

app.delete("/deleteUpRequest/:id", async (req, res) => {
    const deleteRQ = { _id: req.params.id }
    try {
        const data = await UPrequest.deleteOne(deleteRQ)
        console.log(data)
        res.send(data);
    } catch (err) {
        console.log("something went wrong")
        res.send(false)
    }
})

app.post("/findUpUser/:id", async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const data = await UPrequest.findOne(filter);
        if (data) {
            console.log(data);
            res.send(data);
        }
        else {
            console.log("no data ")
            res.send("no data exist")
        }

    } catch (err) {
        console.log(err)
        res.send(false)
    }


})
// ----------------->UpRequest END<---------





app.listen(4500)