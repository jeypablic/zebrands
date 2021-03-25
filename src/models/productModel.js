const mongoose = require('mongoose');

var model = mongoose.Schema({
    sku: String,
    name: String,
    price: Number,
    mark: String
});

// compile schema to model
module.exports = mongoose.model('Product', model);