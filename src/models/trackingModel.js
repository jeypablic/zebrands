const mongoose = require('mongoose');

var model = mongoose.Schema({
    nombre: {
        desc: "Nombre Acción.",
        trim: true,
        type: String,
        createIndexes: true,
        unique: true,
        required: true,
    },
    codigo: {
        desc: "Código Acción",
        type: Number
    },
    sku: {
        desc: 'Sku del producto quien gatilla el tracking',
        trim: true,
        type: String
    },
});

module.exports = mongoose.model('tracking', model);