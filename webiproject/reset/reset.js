exports .forgetPassword= async function(re,res,next){
    const user=await register.findOne({email: req.field.email})

    if(!user){
         res.status(403).send("Incorrect password or userName");


    }
}