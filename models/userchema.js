const mongoose= require ('mongoose')
const Schema = mongoose.Schema

const contactschema=new Schema({
    firstname : String ,
    lastname: String , 
    phonenumber : Number 
    })
const admin = mongoose.model("foued",contactschema)
module.exports = admin 