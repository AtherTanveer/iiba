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

const jwt = require("jsonwebtoken");
const jwtkey = "IIBA@Secure98745$$"
const nodemailer = require("nodemailer");


const admin = require("./AdminPss");
const memberData = require("./memberSchema");
const userRequest = require("./UserSchema");
const haryanaData = require("./HaryanaSchema");
const HrRequest = require("./UserHrSchema");
const UttarparadeshData = require("./UttarparadeshSchema");
const UPrequest = require("./UpUserSchema");
const upload = require("./MulterConfiq");
const newsData = require("./NewsSchema");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "athertanveer6@gmail.com",
        pass: "zyep errr ewez gobc"
    }
})

let MailText = `Dear Member,

                We are pleased to inform you that you have been successfully registered as a member of the Indian Industries & Business Association (Regd.), India.

                Your membership connects you with a professional platform committed to promoting and supporting industries, businesses, and entrepreneurs across the country. Through this association, you will receive important updates, initiatives, and opportunities related to the activities of the organization.

                We encourage you to stay connected and actively participate in the programs and initiatives organized by the association.

                If you require any further information or assistance, please feel free to contact us.
                        
                We warmly welcome you to the Indian Industries & Business Association (IIBA) and look forward to your valuable association.

                Warm regards,  
                Team IIBA  
                Indian Industries & Business Association (Regd.)  
                India`


const streamifier = require("streamifier");
const cloudinary = require("./cloudinary");

app.post("/addMember", verifyToken, upload.single("image"), async (req, res) => {
    try {

        // 🔹 Duplicate check
        const existingMember = await memberData.findOne({
            $or: [
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        });

        if (existingMember) {
            return res.status(400).json({
                success: false,
                message: "Email or Phone already exists"
            });
        }

        let imageUrl = "";

        // 🔹 Upload image to Cloudinary
        if (req.file) {

            const uploadFromBuffer = () => {
                return new Promise((resolve, reject) => {

                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: "iiba_members",
                            transformation: [
                                { width: 300, height: 300, crop: "fill", quality: "auto" }
                            ]
                        },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );

                    streamifier.createReadStream(req.file.buffer).pipe(stream);
                });
            };

            const result = await uploadFromBuffer();
            imageUrl = result.secure_url;
        }

        // 🔹 Save member
        const newMember = new memberData({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            state: req.body.state,
            district: req.body.district,
            city: req.body.city,
            address: req.body.address,
            company: req.body.company,
            image: imageUrl
        });

        const result = await newMember.save();

        res.status(200).json({
            success: true,
            message: "Member Added Successfully",
            data: result
        });

        // 🔹 Send email
        const mailoption = {
            from: "athertanveer6@gmail.com",
            to: result.email,
            subject: "Official Confirmation of Your Membership – IIBA",
            text: MailText
        };

        transporter.sendMail(mailoption, (err) => {
            if (err) console.log("Mail failed");
            else console.log("Mail sent successfully");
        });

    } catch (err) {

        console.log(err);

        if (err.code === 11000) {
            const field = Object.keys(err.keyValue)[0];

            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        res.status(500).json({
            success: false,
            message: "Error Adding Member"
        });
    }
});


app.post("/Re_addMember", async (req, res) => {
    try {

        const newMember = new memberData(req.body);
        const result = await newMember.save();

        res.status(200).json({
            success: true,
            message: "Member Added Successfully",
            data: result
        });

        if (result) {
            const mailoption = {
                from: "athertanveer6@gmail.com",
                to: result.email,
                subject: "Official Confirmation of Your Membership – IIBA",
                text: MailText
            }

            transporter.sendMail(mailoption, (err, inf) => {
                if (err) {
                    console.log("Mail failed");
                } else {
                    console.log("Mail sent successfully");
                }
            })
        }

    } catch (err) {

        console.log(err);

        // 🔴 Duplicate Email / Phone Error
        if (err.code === 11000) {

            const field = Object.keys(err.keyPattern)[0];

            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});


app.get("/getMember", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const skip = (page - 1) * limit;

        const { search } = req.query;

        let query = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { company: { $regex: search, $options: "i" } }
            ];
        }

        const total = await memberData.countDocuments(query);

        const data = await memberData.find(query)
            .skip(skip)
            .limit(limit);

        res.json({
            data,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });

    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

app.put("/updatemember/:id", verifyToken, upload.single("image"), async (req, res) => {
    try {

        const member = await memberData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        let updatedImage = member.image;

        if (req.file) {

            // 🔥 Upload new image to Cloudinary
            const uploadFromBuffer = () => {
                return new Promise((resolve, reject) => {

                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: "iiba_members",
                            transformation: [
                                { width: 300, height: 300, crop: "fill", quality: "auto" }
                            ]
                        },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );

                    streamifier.createReadStream(req.file.buffer).pipe(stream);
                });
            };

            const result = await uploadFromBuffer();
            updatedImage = result.secure_url;

            // 🔥 Delete old image from Cloudinary
            if (member.image) {

                const parts = member.image.split("/");
                const fileName = parts[parts.length - 1].split(".")[0];

                await cloudinary.uploader.destroy("iiba_members/" + fileName);
            }
        }

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
                image: updatedImage
            },
            { new: true }
        );

        res.json(updatedMember);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });
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



app.delete("/deleteMember/:id", verifyToken, async (req, res) => {
    try {

        const member = await memberData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        // 🔥 Delete image from Cloudinary
        if (member.image) {

            const parts = member.image.split("/");
            const fileName = parts[parts.length - 1].split(".")[0];

            await cloudinary.uploader.destroy("iiba_members/" + fileName);
        }

        // 🔥 Delete member from MongoDB
        await memberData.findByIdAndDelete(req.params.id);

        res.json({
            message: "Member and image deleted successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

app.get("/search/:id", verifyToken, async (req, res) => {
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

    const validUserID = "uttrakhand708"
    const validPass = "uttra783"

    if (req.body.userID == validUserID && req.body.password == validPass) {

        const data = await admin.findOne({ userID: validUserID }).select("-password");

        jwt.sign(
            { data, state: "UK" },
            jwtkey,
            { expiresIn: "16d" },
            (err, token) => {

                if (err) {
                    res.send({ result: "something went wrong" })
                }

                res.send({ data, auth: token })
            }
        )

    } else {
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

    const validUserID = "hariyana098"
    const validPass = "hariyana"

    if (req.body.userID == validUserID && req.body.password == validPass) {

        const data = await admin.findOne({ userID: validUserID }).select("-password");

        jwt.sign(
            { data, state: "HR" },
            jwtkey,
            { expiresIn: "16d" },
            (err, token) => {

                if (err) {
                    res.send({ result: "something went wrong" })
                }

                res.send({ data, auth: token })
            }
        )

    } else {
        res.send(false)
    }

})

// -------->>UP<<---------

app.post("/UttarParadesh_adminLogin", async (req, res) => {

    const validUserID = "uttarparadesh745"
    const validPass = "uttarparadesh56"

    if (req.body.userID == validUserID && req.body.password == validPass) {

        const data = await admin.findOne({ userID: validUserID }).select("-password");

        jwt.sign(
            { data, state: "UP" },
            jwtkey,
            { expiresIn: "16d" },
            (err, token) => {

                if (err) {
                    res.send({ result: "something went wrong" })
                }

                res.send({ data, auth: token })
            }
        )

    } else {
        res.send(false)
    }

})
//--------> Admin CODE END




// --------> UK User CODE START

app.post("/userRequest", upload.single("image"), async (req, res) => {
    try {

        let imageUrl = "";

        if (req.file) {

            const uploadFromBuffer = () => {
                return new Promise((resolve, reject) => {

                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: "iiba_requests",
                            transformation: [
                                { width: 300, height: 300, crop: "fill", quality: 70 }
                            ]
                        },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );

                    streamifier.createReadStream(req.file.buffer).pipe(stream);
                });
            };

            const result = await uploadFromBuffer();
            imageUrl = result.secure_url;
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
            image: imageUrl
        });

        const result = await newMember.save();

        res.json(result);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Error Adding Member"
        });
    }
});

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
            return res.status(404).json({ message: "Request not found" });
        }

        // 🔥 Delete image from Cloudinary
        if (request.image) {

            const parts = request.image.split("/");
            const fileName = parts[parts.length - 1].split(".")[0];

            await cloudinary.uploader.destroy("iiba_requests/" + fileName);
        }

        // 🔥 Delete request from database
        await userRequest.findByIdAndDelete(req.params.id);

        res.json({
            message: "Request and image deleted successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
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


app.post("/Add_Haryana_Member", verifyToken, upload.single("image"), async (req, res) => {

    try {

        const existingMember = await haryanaData.findOne({
            $or: [
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        });

        if (existingMember) {
            return res.status(400).json({
                success: false,
                message: "Email or Phone already exists"
            });
        }

        let imageUrl = "";

        if (req.file) {

            const uploadFromBuffer = () => {
                return new Promise((resolve, reject) => {

                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: "iiba_haryana_members",
                            transformation: [
                                { width: 300, height: 300, crop: "fill", quality: 60 }
                            ]
                        },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );

                    streamifier.createReadStream(req.file.buffer).pipe(stream);
                });
            };

            const result = await uploadFromBuffer();
            imageUrl = result.secure_url;
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
            image: imageUrl
        });

        const result = await newMember.save();

        res.status(200).json({
            success: true,
            message: "Haryana Member Added Successfully",
            data: result
        });

        const mailoption = {
            from: "athertanveer6@gmail.com",
            to: result.email,
            subject: "Official Confirmation of Your Membership – IIBA",
            text: MailText
        };

        transporter.sendMail(mailoption, (err) => {
            if (err) {
                console.log("Mail failed");
            } else {
                console.log("Mail sent successfully");
            }
        });

    } catch (err) {

        console.log(err);

        if (err.code === 11000) {

            const field = Object.keys(err.keyValue)[0];

            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        res.status(500).json({
            success: false,
            message: "Error Adding Member"
        });
    }

});

app.post("/ReAdd_Haryana_Member", async (req, res) => {
    try {

        const newMember = new haryanaData(req.body);
        const result = await newMember.save();

        res.status(200).json({
            success: true,
            message: "Haryana Member Added Successfully",
            data: result
        });

        if (result) {
            const mailoption = {
                from: "athertanveer6@gmail.com",
                to: result.email,
                subject: "Official Confirmation of Your Membership – IIBA",
                text: MailText
            };

            transporter.sendMail(mailoption, (err, inf) => {
                if (err) {
                    console.log("Mail failed");
                } else {
                    console.log("Mail sent successfully");
                }
            });
        }

    } catch (err) {

        console.log(err);

        // Duplicate Email / Phone Error
        if (err.code === 11000) {

            const field = Object.keys(err.keyPattern)[0];

            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

app.get("/get_Haryana_member", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const skip = (page - 1) * limit;

        const { search } = req.query;

        let query = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { company: { $regex: search, $options: "i" } }
            ];
        }

        const total = await haryanaData.countDocuments(query);

        const data = await haryanaData.find(query)
            .skip(skip)
            .limit(limit);

        res.json({
            data,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });

    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

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


app.put("/update_Haryana_Member/:id", verifyToken, upload.single("image"), async (req, res) => {
    try {

        const member = await haryanaData.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        let updatedImage = member.image;

        if (req.file) {

            // 🔥 Upload new image to Cloudinary
            const uploadFromBuffer = () => {
                return new Promise((resolve, reject) => {

                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: "iiba_members",
                            transformation: [
                                { width: 300, height: 300, crop: "fill", quality: "auto" }
                            ]
                        },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );

                    streamifier.createReadStream(req.file.buffer).pipe(stream);
                });
            };

            const result = await uploadFromBuffer();
            updatedImage = result.secure_url;

            // 🔥 Delete old image from Cloudinary (URL split method)
            if (member.image) {

                const parts = member.image.split("/");
                const fileName = parts[parts.length - 1].split(".")[0];

                await cloudinary.uploader.destroy("iiba_members/" + fileName);
            }
        }

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
                image: updatedImage
            },
            { new: true }
        );

        res.json(updatedMember);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

app.delete("/Delete_Haryana_Member/:id", verifyToken, async (req, res) => {
  try {

    const member = await haryanaData.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // 🔥 Delete image from Cloudinary
    if (member.image) {

      const parts = member.image.split("/");
      const fileName = parts[parts.length - 1].split(".")[0];

      await cloudinary.uploader.destroy("iiba_members/" + fileName);
    }

    // 🔥 Delete member from DB
    await haryanaData.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Member and image deleted successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Something went wrong"
    });

  }
});

app.get("/HRsearch/:id", verifyToken, async (req, res) => {
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

    let imageUrl = "";

    if (req.file) {

      const uploadFromBuffer = () => {
        return new Promise((resolve, reject) => {

          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "iiba_hr_requests",
              transformation: [
                { width: 300, height: 300, crop: "fill", quality: "auto" }
              ]
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);

        });
      };

      const result = await uploadFromBuffer();
      imageUrl = result.secure_url;

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
      image: imageUrl
    });

    const saved = await hrrequest.save();

    res.json(saved);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Error Adding Request"
    });

  }
});

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

    // 🔥 Delete image from Cloudinary
    if (request.image) {

      const parts = request.image.split("/");
      const fileName = parts[parts.length - 1].split(".")[0];

      await cloudinary.uploader.destroy("iiba_hr_requests/" + fileName);
    }

    // 🔥 Delete request from DB
    await HrRequest.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Request and image deleted successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Something went wrong"
    });

  }
});

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


app.post("/Add_Uttarparadesh_Member", verifyToken, upload.single("image"), async (req, res) => {
  try {

    // 🔹 Duplicate email / phone check
    const existingMember = await UttarparadeshData.findOne({
      $or: [
        { email: req.body.email },
        { phone: req.body.phone }
      ]
    });

    if (existingMember) {
      return res.status(400).json({
        success: false,
        message: "Email or Phone already exists"
      });
    }

    let imageUrl = "";

    // 🔹 Upload image to Cloudinary
    if (req.file) {

      const uploadFromBuffer = () => {
        return new Promise((resolve, reject) => {

          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "iiba_members",
              transformation: [
                { width: 300, height: 300, crop: "fill", quality: 70 }
              ]
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await uploadFromBuffer();
      imageUrl = result.secure_url;

    }

    // 🔹 Save member
    const newMember = new UttarparadeshData({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      state: req.body.state,
      district: req.body.district,
      city: req.body.city,
      address: req.body.address,
      company: req.body.company,
      image: imageUrl
    });

    const saved = await newMember.save();

    res.status(200).json({
      success: true,
      message: "Member Added Successfully",
      data: saved
    });

    // 🔹 Send mail
    const mailoption = {
      from: "athertanveer6@gmail.com",
      to: saved.email,
      subject: "Official Confirmation of Your Membership – IIBA",
      text: MailText
    };

    transporter.sendMail(mailoption, (err) => {
      if (err) {
        console.log("Mail failed");
      } else {
        console.log("Mail sent successfully");
      }
    });

  } catch (err) {

    console.log(err);

    if (err.code === 11000) {

      const field = Object.keys(err.keyValue)[0];

      return res.status(400).json({
        success: false,
        message: `${field} already exists`
      });
    }

    res.status(500).json({
      success: false,
      message: "Error Adding Member"
    });

  }
});

app.post("/ReAdd_Uttarparadesh_Member", async (req, res) => {
    try {

        const newMember = new UttarparadeshData(req.body);
        const result = await newMember.save();

        res.status(200).json({
            success: true,
            message: "Uttar Pradesh Member Added Successfully",
            data: result
        });

        if (result) {
            const mailoption = {
                from: "athertanveer6@gmail.com",
                to: result.email,
                subject: "Official Confirmation of Your Membership – IIBA",
                text: MailText
            };

            transporter.sendMail(mailoption, (err, inf) => {
                if (err) {
                    console.log("Mail failed");
                } else {
                    console.log("Mail sent successfully");
                }
            });
        }

    } catch (err) {

        console.log(err);

        // Duplicate Email / Phone Error
        if (err.code === 11000) {

            const field = Object.keys(err.keyPattern)[0];

            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

app.get("/get_Uttarparadesh_member", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 8;
        const skip = (page - 1) * limit;

        const { search } = req.query;

        let query = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { company: { $regex: search, $options: "i" } }
            ];
        }

        const total = await UttarparadeshData.countDocuments(query);

        const data = await UttarparadeshData.find(query)
            .skip(skip)
            .limit(limit);

        res.json({
            data,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });

    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

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

app.put("/update_Uttarparadesh_Member/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {

    const member = await UttarparadeshData.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    let updatedImage = member.image;

    if (req.file) {

      // 🔥 Upload new image to Cloudinary
      const uploadFromBuffer = () => {
        return new Promise((resolve, reject) => {

          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "iiba_members",
              transformation: [
                { width: 300, height: 300, crop: "fill", quality: "auto" }
              ]
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await uploadFromBuffer();
      updatedImage = result.secure_url;

      // 🔥 Delete old image from Cloudinary
      if (member.image) {

        const parts = member.image.split("/");
        const fileName = parts[parts.length - 1].split(".")[0];

        await cloudinary.uploader.destroy("iiba_members/" + fileName);
      }
    }

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
        image: updatedImage
      },
      { new: true }
    );

    res.json(updatedMember);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Something went wrong"
    });

  }
});

app.delete("/Delete_Uttarparadesh_Member/:id", verifyToken, async (req, res) => {
  try {

    const member = await UttarparadeshData.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // 🔥 Delete image from Cloudinary
    if (member.image) {

      const parts = member.image.split("/");
      const fileName = parts[parts.length - 1].split(".")[0];

      await cloudinary.uploader.destroy("iiba_members/" + fileName);
    }

    // 🔥 Delete member from DB
    await UttarparadeshData.findByIdAndDelete(req.params.id);

    res.json({
      message: "Member and image deleted successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Something went wrong"
    });

  }
});

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

    let imageUrl = "";

    if (req.file) {

      const uploadFromBuffer = () => {
        return new Promise((resolve, reject) => {

          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "iiba_members",
              transformation: [
                { width: 300, height: 300, crop: "fill", quality: "auto" }
              ]
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await uploadFromBuffer();
      imageUrl = result.secure_url;

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
      image: imageUrl
    });

    const saved = await request.save();

    res.json(saved);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Error Adding Member"
    });

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

        // 🔥 Delete image from Cloudinary
        if (request.image) {
            // Extract public_id from the stored URL
            const parts = request.image.split("/");
            const fileName = parts[parts.length - 1].split(".")[0];

            // Assuming your images are stored in a folder named "iiba_requests"
            await cloudinary.uploader.destroy(`iiba_members/${fileName}`);
        }

        // 🔥 Delete request from database
        await UPrequest.findByIdAndDelete(req.params.id);

        res.json({
            message: "Member and image deleted successfully"
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

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
app.post("/postNews", upload.single("image"), async (req, res) => {
    try {
        let imageUrl = "";

        if (req.file) {
            // Upload to Cloudinary
            const result = await cloudinary.uploader.upload_stream(
                { 
                    folder: "iiba_news", // Cloudinary folder
                    format: "webp",      // convert to webp
                    quality: "auto",     // automatic quality optimization
                    transformation: [
                        { width: 600, height: 600, crop: "limit" } // resize
                    ]
                },
                async (error, result) => {
                    if (error) {
                        console.error("Cloudinary upload error:", error);
                        return res.status(500).json({ message: "Image upload failed" });
                    } else {
                        // Save news after successful image upload
                        const news = new newsData({
                            title: req.body.title,
                            category: req.body.category,
                            date: req.body.date,
                            description: req.body.description,
                            image: result.secure_url, // store full Cloudinary URL
                        });

                        const savedNews = await news.save();
                        res.json(savedNews);
                    }
                }
            );

            // Pipe buffer to Cloudinary upload_stream
            streamifier.createReadStream(req.file.buffer).pipe(result);

        } else {
            // No image uploaded, save news without image
            const news = new newsData({
                title: req.body.title,
                category: req.body.category,
                date: req.body.date,
                description: req.body.description,
                image: "", // empty if no image
            });

            const savedNews = await news.save();
            res.json(savedNews);
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error Adding News" });
    }
});

app.get("/getNews", async (req, res) => {
    try {
        // Page & Limit from query
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;

        const skip = (page - 1) * limit;

        // Total count
        const total = await newsData.countDocuments();

        // Paginated Data
        const data = await newsData
            .find({})
            .sort({ createdAt: -1 }) // latest first
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            data,
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

app.delete("/DeleteNews/:id", async (req, res) => {
    try {
        const news = await newsData.findById(req.params.id);

        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }

        // 🔥 Delete image from Cloudinary
        if (news.image) {
            // Extract public_id from Cloudinary URL
            const parts = news.image.split("/");
            const fileNameWithExt = parts[parts.length - 1];
            const fileName = fileNameWithExt.split(".")[0];

            // If you uploaded images to folder "iiba_news"
            await cloudinary.uploader.destroy(`iiba_news/${fileName}`);
        }

        // 🔥 Delete news from database
        await newsData.findByIdAndDelete(req.params.id);

        res.json({ message: "News and image deleted successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.get("/goNewsUpdate/:id", async (req, res) => {
    const update = { _id: req.params.id }

    try {
        const data = await newsData.findOne(update);
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

app.put("/updateNews/:id", upload.single("image"), async (req, res) => {
    try {
        const news = await newsData.findById(req.params.id);

        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }

        let updatedImage = news.image;

        if (req.file) {
            // 🔥 Delete old image from Cloudinary if exists
            if (news.image) {
                const parts = news.image.split("/");
                const fileNameWithExt = parts[parts.length - 1];
                const fileName = fileNameWithExt.split(".")[0];

                // Assuming your folder is "iiba_news"
                await cloudinary.uploader.destroy(`iiba_news/${fileName}`);
            }

            // 🔥 Upload new image to Cloudinary
            const uploadResult = await cloudinary.uploader.upload_stream({
                folder: "iiba_news",
                format: "webp",
                quality: "auto",
                transformation: [{ width: 800, crop: "limit" }]
            }, (error, result) => {
                if (error) throw error;
                return result;
            });

            // Since uploader.upload_stream uses a callback, we need streamifier
            const streamifier = require("streamifier");
            await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "iiba_news", format: "webp", quality: "auto", transformation: [{ width: 800, crop: "limit" }] },
                    (error, result) => {
                        if (error) reject(error);
                        else {
                            updatedImage = result.secure_url;
                            resolve(result);
                        }
                    }
                );
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        }

        // 🔥 Update DB
        const updatedNews = await newsData.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                category: req.body.category,
                date: req.body.date,
                description: req.body.description,
                image: updatedImage,
            },
            { new: true }
        );

        res.json(updatedNews);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// --------------News END--------------




// <<<<----------Certificate START------->>>>
const PDFDocument = require("pdfkit");

app.get("/generateCertificate/:id", async (req, res) => {
    try {


        let member = null;
        const models = [memberData, UttarparadeshData, haryanaData];

        for (let model of models) {
            member = await model.findById(req.params.id);
            if (member) break;
        }

        if (!member) {
            return res.status(404).send("Member not found");
        }



        const doc = new PDFDocument({
            size: "A4",
            layout: "landscape",
            margin: 40
        });

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=certificate_${member.name}.pdf`
        );

        res.setHeader("Content-Type", "application/pdf");

        doc.pipe(res);

        // 🎨 Background
        doc.rect(0, 0, doc.page.width, doc.page.height).fill("#f9fafb");

        // 🟡 Golden Border
        doc
            .lineWidth(5)
            .strokeColor("#d4af37")
            .rect(20, 20, doc.page.width - 40, doc.page.height - 40)
            .stroke();

        doc
            .lineWidth(1)
            .strokeColor("#d4af37")
            .rect(30, 30, doc.page.width - 60, doc.page.height - 60)
            .stroke();

        // 🏆 Title
        doc
            .fillColor("#0f172a")
            .fontSize(38)
            .font("Helvetica-Bold")
            .text("Certificate of Membership", 0, 100, {
                align: "center"
            });

        // underline
        doc
            .moveTo(250, 145)
            .lineTo(600, 145)
            .lineWidth(2)
            .strokeColor("#d4af37")
            .stroke();

        // Subtitle
        doc
            .moveDown(1.5)
            .fontSize(18)
            .fillColor("#374151")
            .font("Helvetica")
            .text("This is to certify that", {
                align: "center"
            });

        // 👤 Name
        doc
            .moveDown(0.8)
            .fontSize(30)
            .fillColor("#b45309")
            .font("Helvetica-Bold")
            .text(member.name.toUpperCase(), {
                align: "center"
            });

        // Company
        doc
            .moveDown(0.5)
            .fontSize(23)
            .fillColor("#1f2937")
            .font("Helvetica")
            .text(`From (${member.company})`, {
                align: "center"
            });

        // Description
        // Center width define
        const pageWidth = doc.page.width;

        // Description (FIXED CENTER)
        doc
            .moveDown(1.5)
            .fontSize(15)
            .fillColor("#374151")
            .text(
                "is hereby certified as an esteemed member of the Indian Industrial & Business Association (IIBA), in recognition of their active participation and valuable contribution towards industrial development, business excellence, and infrastructure growth.",
                100,   // left margin
                doc.y, // current vertical position
                {
                    width: pageWidth - 200, // center width (100 left + 100 right margin)
                    align: "center"
                }
            );

        // 🗓 Date
        const today = new Date().toLocaleDateString();

        doc
            .moveDown(2)
            .fontSize(14)
            .fillColor("#111827")
            .text(`Date: ${today}`, 100, 420);

        // ✍ Signature Left
        doc
            .moveTo(100, 470)
            .lineTo(250, 470)
            .strokeColor("#000")
            .stroke();

        doc
            .fontSize(12)
            .text("Authorized Signatory", 110, 475);

        // ✍ Signature Right
        doc
            .moveTo(550, 470)
            .lineTo(700, 470)
            .strokeColor("#000")
            .stroke();

        doc
            .fontSize(12)
            .text("IIBA Organization", 570, 475);

        // 🎖 Footer line
        doc
            .moveTo(100, 520)
            .lineTo(700, 520)
            .lineWidth(1)
            .strokeColor("#d4af37")
            .stroke();

        doc
            .fontSize(10)
            .fillColor("#6b7280")
            .text(
                "Indian Industrial & Business Association (IIBA) | Empowering Industries & Infrastructure",
                0,
                530,
                { align: "center" }
            );

        doc.end();

    } catch (err) {
        console.log(err);
        res.status(500).send("Error generating certificate");
    }
});

// <<<<----------Certificate END------->>>>


// JWT TOKEN MIDDLEWARE
function verifyToken(req, res, next) {

    const header = req.headers["authorization"]

    if (!header) {
        return res.status(401).send({ result: "Token required" })
    }

    const token = header.split(" ")[1]

    jwt.verify(token, jwtkey, (err, decoded) => {

        if (err) {
            return res.status(401).send({ result: "Invalid Token" })
        }

        req.user = decoded
        console.log("State:", decoded.state)

        next()
    })
}

app.get("/serveralive", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is sdsdalive!" });
});


const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log("Server running");
});