const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const userRoute = require("./routes/user")

mongoose.connect("mongodb+srv://sahil:HaE6VSiCQpi5D3ZA@cluster0.6qjkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connection.on('error', err=>{
    console.log("error")
});

mongoose.connection.on('connected' , connected =>{
    console.log("connection with database")
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use("/user",userRoute);

app.listen(2000 , ()=>{
    console.log("server 2000 is running");
});