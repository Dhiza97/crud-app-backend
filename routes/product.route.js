const express = require('express')
const Product = require('../models/product.model.js');
const router = express.Router()
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

// Get all products
router.get( '/', getProducts)

// Get  a single product by its ID
router.get('/:id', getProduct)

// Create a Product
router.post('/', createProduct)

// Update a Product
router.put('/:id', updateProduct)

// Delete a Product
router.delete('/:id', deleteProduct)


module.exports = router