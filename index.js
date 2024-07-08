
const express = require("express");
const mongoose = require("mongoose");
const app=express();
require('dotenv').config()

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });


  const productSchema = new mongoose.Schema({
    product_name : {
      type : String,
      required : true
    },
    product_price :{
      type:String,
      required : true
    },
    isInStock :{
      type:Boolean,
      required:true
    },
    Category :{
      type:String,
      required:true
    }
  })

  const ProductModel = mongoose.model("products",productSchema);

  app.post("/api/products",async(req,res) => {
    const body = req.body;
    const product = productModel.create({
      product_name : req.body.product_name,
      product_price : req.body.product_price,
      isInStock : req.body.isInStock,
      Category : req.body.Category,
    })

    console.log(product)

    return res.status(201).json({message:"Product Created"});
});



    app.listen(8086, () => {
      console.log("Server sarted at port 8086");
    });

  // Create

  app.post("/api/products", async (req, res) => {
    await ProductModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });

  return res.status(201).json({ message: "Product Created" });
  });


  // get route

  app.get('/api/products' , async(req , res)=>{
    const allProducts = await ProductModel.find({isInStock:true})

    return res.json(allProducts)
  })


  // Get product by id

app.get('/api/products/:id' , async(req , res)=>{
  const product = await ProductModel.findById(req.params.id)
 
  return res.json(product)
 })

 //Update Product

 app.put('api/products/:id',async(req,res)=>{
  const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id,req.body)
  return res.json(updatedProduct)
 })

 //Delete Product 

 app.delete('api/products/:id',async(req,res)=>{
  const deletedProduct  = await ProductModel.findByIdAndDelete(req.params.id)
  return res.json(deletedProduct)
 })