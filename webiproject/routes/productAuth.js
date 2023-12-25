const express = require("express")
const router = express.Router();
const formidable = require("express-formidable");
const{ createProduct,getProduct,updateProduct,deletedProduct}=require("../controller/productCntr")



router.post("/product",formidable(),createProduct)
router.get("/getproduct",formidable(),getProduct)
router.put("/updateProduct/:id",formidable(),updateProduct)
router.delete("/deletedProduct/:id",formidable(),deletedProduct)


module.exports=router;
