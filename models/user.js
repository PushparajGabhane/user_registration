const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: { type: String },
    dob: { type: String },
    email: { type: String },
    phone: { type: Number }
});

const UserModel = mongoose.model("UserForm", User);

module.exports = UserModel;