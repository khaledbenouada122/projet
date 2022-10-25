const express = require("express")
const app = express()
app.use(express.json())
const mongoose = require ("mongoose")
const dotenv = require("dotenv").config({path:"./config/.env"})
app.use('/',require("./routes/userRoutes"))

{ mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("conecter au basa")})
    .catch(e=>{console.log(e)})}
app.listen(process.env.PORT,(err)=>{
    if (err) throw err
    else{
        console.log("mongo DB est connecter en succées sur : ", process.env.PORT)}
    })
