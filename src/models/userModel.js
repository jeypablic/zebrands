const mongoose = require('mongoose');

var model = mongoose.Schema({
    rut: {
        desc: "Rut del usuario.",
        trim: true,
        type: String,
        createIndexes: true,
        unique: true,
        required: true,
    },
    nombre: {
        desc: "Nombre del usuario",
        trim: true,
        type: String
    },
    aPaterno: {
        desc: "Apellido Paterno del usuario",
        trim: true,
        type: String
    },
    aMaterno: {
        desc: "Apellido Paterno del usuario",
        trim: true,
        type: String
    },
    perfil: {
        desc: "Perfil del usuario.",
        trim: true,
        type: Number
    }
});

module.exports = mongoose.model('usuario', model);