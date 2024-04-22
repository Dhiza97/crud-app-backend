const Product = require('../models/product.model.js');

// Get all Products
const getProducts = async (req, res) => {

    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

// Get a single product by its ID
const getProduct = async (req, res) => {

    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message : error.message})
    }

}

// Create a new product
const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message })
    }

}

// Update a Product
const updateProduct = async (req, res) => {

    try {
        const { id } = req.params

        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product) {
            return res.status(404).json({message:"No product with this ID"})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message : error.message})
    }

}

// Delete a Product
const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message: "Product not found "})
        }
        res.status(200).json("The product has been deleted")
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}