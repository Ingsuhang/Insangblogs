//CONNECTION FOR MONGOOSE
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/insangblogs");

//REQUIRED EXPRESS 
const express = require('express');
const router = require('./routes');
const app = express();

app.use(router);

// 404 handling 
app.use((req, res, next) =>{
    next({status: 404, msg: "404 Not found"})
});

//SERVER CONNECTION
app.listen(3005,(err)=>{
    if(!err){
        console.log("SERVER IS RUNNING");
    }else{
        console.log("ERROR WHILE LISTENING SERVER")
    }
})