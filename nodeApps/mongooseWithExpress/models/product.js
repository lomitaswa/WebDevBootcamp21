const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        required: true
    },
    price: {
        type: Number
    },
    desc: {
        type: String,
        min: 10,
        max: 50
    }
})

const Product  = mongoose.model('Product', productSchema);

module.exports = Product;