const mongoose = require('mongoose');

var model = mongoose.Schema({
    sku: {
        desc: "SKU del producto.",
        trim: true,
        type: String,
        createIndexes: true,
        unique: true,
        required: true,
    },
    nombre: {
        desc: "Nombre del Producto",
        trim: true,
        type: String
    },
    nombre: {
        desc: "Nombre del Producto",
        trim: true,
        type: String
    },
    marca: {
        desc: "Marca del Producto",
        type: Number
    },
    precio: {
        desc: "Precio del Producto",
        type: Number
    }
});

// compile schema to model
module.exports = mongoose.model('producto', model);