const express = require("express");
const app = express();

require("./confiq");
app.use(express.json());

const cors = require("cors");

app.use(cors());
app.use("/uploads", express.static("uploads"));
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");


const admin = require("./AdminPss");
const memberData = require("./memberSchema");
const userRequest = require("./UserSchema");
const haryanaData = require("./HaryanaSchema");
const HrRequest = require("./UserHrSchema");
const UttarparadeshData = require("./UttarparadeshSchema");
const UPrequest = require("./UpUserSchema");
const upload = require("./MulterConfiq");
const newsData = require("./NewsSchema");

app.post("/addMember", upload.single("image"), async (req, res) => {
    try {

        let imageName = "";

        if (req.file) {
            imageName = Date.now() + ".webp";

            const uploadPath = path.join(__dirname, "uploads");

            // Make sure uploads folder exists
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            await sharp(req.file.buffer)
                .resize(300, 300) // resize (you can change)
                .webp({ quality: 60 }) // compression quality
                .toFile(path.join(uploadPath, imageName));
        }

        const newMember = new memberData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: imageName
        });

        const result = await newMember.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }

})


app.post("/Re_addMember", async (req, res) => {
    try {
        const newMember = new memberData(req.body);
        const result = await newMember.save();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
});


app.get("/getMember", async (req, res) => {
    const data = await memberData.find({});
    console.log(data);
    res.send(data);
})

app.put("/updatemember/:id", upload.single("image"), async (req, res) => {
    try {
        const member = await memberData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        let updatedImage = member.image; // default keep old image

        // Only if new file uploaded
        if (req.file) {

            // Delete old image if exists
            if (member.image) {
                const imagePath = path.join(__dirname, "uploads", member.image);

                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }

            // Set new image filename
            updatedImage = req.file.filename;
        }

        // Update data
        const updatedMember = await memberData.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                state: req.body.state,
                district: req.body.district,
                city: req.body.city,
                address: req.body.address,
                company: req.body.company,
                image: updatedImage,
            },
            { new: true }
        );

        res.json(updatedMember);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

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
    try {
        const member = await memberData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        // Delete image file if exists
        if (member.image) {
            const imagePath = path.join(__dirname, "uploads", member.image);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Image delete error:", err);
                } else {
                    console.log("Image deleted successfully");
                }
            });
        }

        // Delete member from DB
        await memberData.findByIdAndDelete(req.params.id);

        res.json({ message: "Member and image deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.get("/search/:id", async (req, res) => {
    const data = await memberData.find({
        "$or": [
            { name: { $regex: req.params.id } },
            { district: { $regex: req.params.id } },
            { city: { $regex: req.params.id } }
        ]
    })
    console.log(data)
    res.send(data)


});




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




// --------> UK User CODE START
app.post("/userRequest", upload.single("image"), async (req, res) => {
    try {

        let imageName = "";

        if (req.file) {
            imageName = Date.now() + ".webp";

            const uploadPath = path.join(__dirname, "uploads");

            // Make sure uploads folder exists
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            await sharp(req.file.buffer)
                .resize(300, 300) // resize (you can change)
                .webp({ quality: 60 }) // compression quality
                .toFile(path.join(uploadPath, imageName));
        }

        const newMember = new userRequest({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: imageName
        });

        const result = await newMember.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
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
    try {
        // Delete member from DB
        await userRequest.findByIdAndDelete(req.params.id);
        res.json({ message: "Request deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
})

// ADMIN DELETE THE REQUEST 
app.delete("/AdminDeleteRequest/:id", async (req, res) => {
    try {
        const request = await userRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ message: "request not found" });
        }

        // Delete image file if exists
        if (request.image) {
            const imagePath = path.join(__dirname, "uploads", request.image);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Image delete error:", err);
                } else {
                    console.log("Image deleted successfully");
                }
            });
        }

        // Delete member from DB
        await userRequest.findByIdAndDelete(req.params.id);

        res.json({ message: "Member and image deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
})
// ADMIN DELETE THE REQUEST 


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
        let imageName = "";

        if (req.file) {
            imageName = Date.now() + ".webp";

            const uploadPath = path.join(__dirname, "uploads");

            // Make sure uploads folder exists
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            await sharp(req.file.buffer)
                .resize(300, 300) // resize (you can change)
                .webp({ quality: 60 }) // compression quality
                .toFile(path.join(uploadPath, imageName));
        }
        const newMember = new haryanaData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: imageName
        });

        const result = await newMember.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
})

app.post("/ReAdd_Haryana_Member", async (req, res) => {
    try {
        const newMember = new haryanaData(req.body);
        const result = await newMember.save();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
});

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
    try {
        const member = await haryanaData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        let updatedImage = member.image; // default keep old image

        // Only if new file uploaded
        if (req.file) {

            // Delete old image if exists
            if (member.image) {
                const imagePath = path.join(__dirname, "uploads", member.image);

                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }

            // Set new image filename
            updatedImage = req.file.filename;
        }

        // Update data
        const updatedMember = await haryanaData.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                state: req.body.state,
                district: req.body.district,
                city: req.body.city,
                address: req.body.address,
                company: req.body.company,
                image: updatedImage,
            },
            { new: true }
        );

        res.json(updatedMember);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }

})

app.delete("/Delete_Haryana_Member/:id", async (req, res) => {
    try {
        const member = await haryanaData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        // Delete image file if exists
        if (member.image) {
            const imagePath = path.join(__dirname, "uploads", member.image);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Image delete error:", err);
                } else {
                    console.log("Image deleted successfully");
                }
            });
        }

        // Delete member from DB
        await haryanaData.findByIdAndDelete(req.params.id);

        res.json({ message: "Member and image deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
})
app.get("/HRsearch/:id", async (req, res) => {
    const data = await haryanaData.find({
        "$or": [
            { name: { $regex: req.params.id } },
            { district: { $regex: req.params.id } },
            { city: { $regex: req.params.id } }
        ]
    })
    console.log(data)
    res.send(data)


});
// >------------------------------>Haryana END<-------------------------------<
// --------> User HR CODE START
app.post("/userHRRequest", upload.single("image"), async (req, res) => {
    try {

        let imageName = "";

        if (req.file) {
            imageName = Date.now() + ".webp";

            const uploadPath = path.join(__dirname, "uploads");

            // Make sure uploads folder exists
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            await sharp(req.file.buffer)
                .resize(300, 300) // resize (you can change)
                .webp({ quality: 50 }) // compression quality
                .toFile(path.join(uploadPath, imageName));
        }

        const hrrequest = new HrRequest({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: imageName
        });

        const result = await hrrequest.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Request" });
    }
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
// ADMIN DELETE REQUEST
app.delete("/AdminDeleteHRRequest/:id", async (req, res) => {
    try {
        const request = await HrRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ message: "Request not found" });
        }

        // Delete image file if exists
        if (request.image) {
            const imagePath = path.join(__dirname, "uploads", request.image);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Image delete error:", err);
                } else {
                    console.log("Image deleted successfully");
                }
            });
        }

        // Delete member from DB
        await HrRequest.findByIdAndDelete(req.params.id);

        res.json({ message: "Member and image deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
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
app.post("/Add_Uttarparadesh_Member", upload.single("image"), async (req, res) => {
    try {

        let imageName = "";

        if (req.file) {
            imageName = Date.now() + ".webp";

            const uploadPath = path.join(__dirname, "uploads");

            // Make sure uploads folder exists
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            await sharp(req.file.buffer)
                .resize(300, 300) // resize (you can change)
                .webp({ quality: 60 }) // compression quality
                .toFile(path.join(uploadPath, imageName));
        }

        const newMember = new UttarparadeshData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: imageName
        });

        const result = await newMember.save();

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
})

app.post("/ReAdd_Uttarparadesh_Member", async (req, res) => {
    try {
        const newMember = new UttarparadeshData(req.body);
        const result = await newMember.save();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Error Adding Member" });
    }
});

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

app.put("/update_Uttarparadesh_Member/:id", upload.single("image"), async (req, res) => {
    try {
        const member = await UttarparadeshData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        let updatedImage = member.image; // default keep old image

        // Only if new file uploaded
        if (req.file) {

            // Delete old image if exists
            if (member.image) {
                const imagePath = path.join(__dirname, "uploads", member.image);

                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }

            // Set new image filename
            updatedImage = req.file.filename;
        }

        // Update data
        const updatedMember = await UttarparadeshData.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                state: req.body.state,
                district: req.body.district,
                city: req.body.city,
                address: req.body.address,
                company: req.body.company,
                image: updatedImage,
            },
            { new: true }
        );

        res.json(updatedMember);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }


})

app.delete("/Delete_Uttarparadesh_Member/:id", async (req, res) => {
    try {
        const member = await UttarparadeshData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Request not found" });
        }

        // Delete image file if exists
        if (member.image) {
            const imagePath = path.join(__dirname, "uploads", member.image);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Image delete error:", err);
                } else {
                    console.log("Image deleted successfully");
                }
            });
        }

        // Delete member from DB
        await UttarparadeshData.findByIdAndDelete(req.params.id);

        res.json({ message: "Member and image deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
})
app.get("/UPsearch/:id", async (req, res) => {
    const data = await UttarparadeshData.find({
        "$or": [
            { name: { $regex: req.params.id } },
            { district: { $regex: req.params.id } },
            { city: { $regex: req.params.id } }
        ]
    })
    console.log(data)
    res.send(data)


});
// --------------->>>UP END<<<----------<<
// ----------------->UpRequest<-------<
app.post("/userUpRequest", upload.single("image"), async (req, res) => {
    try {

        let imageName = "";

        if (req.file) {
            imageName = Date.now() + ".webp";

            const uploadPath = path.join(__dirname, "uploads");

            // Make sure uploads folder exists
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            await sharp(req.file.buffer)
                .resize(300, 300) // resize (you can change)
                .webp({ quality: 60 }) // compression quality
                .toFile(path.join(uploadPath, imageName));
        }

        const request = new UPrequest({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: imageName,
        });

        const result = await request.save();

        res.json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error Adding Member" });
    }
});

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
// ADMIN DELETE USER REQUEWT
app.delete("/AdminDeleteUpRequest/:id", async (req, res) => {
    try {
        const request = await UPrequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ message: "Request not found" });
        }

        // Delete image file if exists
        if (request.image) {
            const imagePath = path.join(__dirname, "uploads", request.image);

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.log("Image delete error:", err);
                } else {
                    console.log("Image deleted successfully");
                }
            });
        }

        // Delete member from DB
        await UPrequest.findByIdAndDelete(req.params.id);

        res.json({ message: "Member and image deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
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


// --------------News START--------------
app.post("/postNews", upload.single("image"),async(req,res)=>{
    try {

        let imageName = "";

        if (req.file) {
            imageName = Date.now() + ".webp";

            const uploadPath = path.join(__dirname, "uploads");

            // Make sure uploads folder exists
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            await sharp(req.file.buffer)
                .resize(300, 300) // resize (you can change)
                .webp({ quality: 90 }) // compression quality
                .toFile(path.join(uploadPath, imageName));
        }

        const request = new newsData({
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            description: req.body.description,
            image: imageName,
        });

        const result = await request.save();

        res.json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error Adding Member" });
    }
})

app.get("/getNews",async(req,res)=>{
    const data = await newsData.find({});
    if(data){
        res.send(data)
    }else{
        res.send("data not found");
    }
})

// --------------News END--------------


app.listen(4500)