const express = require('express');
const cors = require('cors');
const router = require('./routes/route');
const mongoose = require('mongoose');

const app = express();

app.use(cors("*"));

app.use("/", router);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.db, () => {
    console.log("connected to database");
})

app.listen(5000, () => {
    console.log("server is up....")
})