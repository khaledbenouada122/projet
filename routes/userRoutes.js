
const express = require ("express")
const app = express()
const router = express.Router()
app.use(express.json())
const admin = require("../models/userchema")


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
   let userID = req.params.id
   admin.findByIdAndUpdate(userID,{...req.body})
   .then((admin)=>{
      if(!admin){
         return res.status(404).send({msg:"not found"})}
                res.send({msg:"updatedd"})})
   .catch((err)=>res.status(400).send({msg:"errod upadating"})
   )})
   router.delete("/delete/:id",(req,res)=>{
      admin.findByIdAndDelete(req.params.id)
      .then((data)=>{
         if (!data){
            res.status(404).json({msg:'user not defined'})
         }
         else {
            res.status(200).json({msg:"user deleted sucesseflly"})}
      }).catch((error)=>{res.status(400).send(err)})
   })





module.exports=router