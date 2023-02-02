const router = require('express').Router();
const UserModel = require('../models/user');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
require('dotenv').config();

router.use(bodyParser.json());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});

let mailOptions = {
    from: process.env.email,
    to: 'pushparaj.gabhane.621999@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Happy republic day'
};

router.post("/user-form", async (req, res) => {

    try {
        const result = await UserModel.create({
            name: req.body.name,
            dob: req.body.dob,
            email: req.body.email,
            phone: req.body.phone
        });
        transporter.sendMail({ ...mailOptions, to: req.body.email }, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.json({
            status: "Success",
            result
        })
    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
});

router.get("/user-form", async (req, res) => {
    const result = await UserModel.find();
    res.json({
        result
    })
})

module.exports = router;