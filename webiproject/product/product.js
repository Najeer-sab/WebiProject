const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId: {
    type: String,
    required: true,
    unique: true
    
  },
  productName: {
    type: String,
    required: true,
  },
  
  numberOfProduct: {
    type: Number,
    required: true,
  },
  price:{
    type: Number,
    required: true,
    
  },
});
module.exports=mongoose.model("product",productSchema)
