const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require( './routes/product.route.js' )

const { urlencoded } = require('body-parser')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/products', productRoute)

mongoose.connect("mongodb+srv://josephgarba97:tsHa4m5II71f265f@crud.nicidug.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUD")
.then(() => {
    console.log("E don connect!")
})
.catch(() => {
    console.log('Connection failed')
})

app.get('/', (req, res) => {
    res.send('Hello from Joe! ')
})

app.listen(3000, () => {
    console.log('Server running on port 3000'); 
})