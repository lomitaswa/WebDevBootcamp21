const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// Get all products
router.get('/products', async (req, res) => {
    const products = await Product.find();

    res.render('index',{products});
})

// Create product page
router.get('/products/new', (req, res, next) => {
   try{
    res.render('new');
   } catch (err) {
       console.log(err.message);
   }
})

router.post('/products', async (req, res) =>{
    const product = req.body;

    await Product.create(product);
    res.redirect('/products')
})

// Get a product
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.render('show', {product});
})

// Edit a product
router.get('/products/:id/edit', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('edit', {product});
})

router.patch('/products/:id', async(req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/products/${req.params.id}`)
})

// Delete a product
router.delete('/products/:id', async(req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    res.redirect('/products');
})

module.exports = router;