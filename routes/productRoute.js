const express = require('express')
const router = require('express').Router()
const productControllers = require('../controllers/productControllers.js')
// Create

router.post("/", productControllers.createProduct);


// get route

router.get('/' ,productControllers.getAllProducts )


 // Get product by id

 router.get('/:id' ,productControllers.getById )

 //Update Product

 router.put('/:id',productControllers.updateProduct)

 //Delete Product 

 router.delete('/:id',productControllers.deleteProduct)

 module.exports = router