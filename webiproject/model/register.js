const mongoose=require('mongoose')
const registerSchema= new mongoose.Schema({
    firstName:{type:String,  required: true },
    lastName:{ type:String, required: true },
    email:{type:String, required: true ,unique: true },
    phoneNumber:{type:Number, required: true },
    password:{type:String, required: true },
    token:{type:String}
})


module.exports=mongoose.model("register",registerSchema) 