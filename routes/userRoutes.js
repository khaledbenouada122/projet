
const express = require ("express")
const app = express()

const router = express.Router()
const admin = require("../models/userchema")
router.use(express.json())


router.post('/adduser',(req,res)=>{
   const   {firstname,lastname,phonenumber} = req.body
   console.log("bodu contient :",req.body)
   const newUser = new admin({firstname,lastname,phonenumber,});
      newUser
   .save()
    
   .then((newUser)=>res.send(newUser))
    
     
   .catch((err)=>res.status(404).send({msg:"cannot add user"}))
})
router.get('/kh',(req,res)=>{
   admin.find()
   .then((data)=>{res.send(data)})
   .catch((err)=>res.status(500).send(err))})

router.put("/updateuser/:id",(req,res)=>{
   const userID = req.params.id
   admin.findByIdAndUpdate(userID,{...req.body})
   .then((admin)=>{
      if(!admin){
         return res.status(404).send({msg:"not found"})}
            res.sendFile({msg:"updatedd"})})
   .catch((err)=>res.status(400).send({msg:"errod upadatinggg"}))
})




module.exports=router