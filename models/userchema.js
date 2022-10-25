const mongoose= require ('mongoose')
const schema = mongoose.Schema()
const contactschema={
    firstname : String ,
    lastname: String , 
    phonenumber : Number 
    }
const admin = mongoose.model("foued",contactschema)
module.exports = admin