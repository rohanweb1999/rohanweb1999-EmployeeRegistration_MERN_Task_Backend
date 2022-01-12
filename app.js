const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb://localhost/employeeData";

mongoose.connect(url, () => {
    console.log("db connected..")
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
        "GET, POST,PUT, DELETE, OPTIONS")
    next();
})


app.use(express.json());

const empRoutes = require('./routes/empRoutes')
app.use('/', empRoutes)

app.listen(5000, () => {
    console.log("server connected with port 5000...");
})