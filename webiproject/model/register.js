const mongoose=require('mongoose')
const registerSchema= new mongoose.Schema({
    firstName:{type:String},
    lastName:{ type:String},
    email:{type:String},
    phoneNumber:{type:Number}
})


module.exports=mongoose.model("register",registerSchema)