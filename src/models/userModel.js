const mongoose = require('mongoose');

var model = mongoose.Schema({
    rut: String,
    name: String,
    perfil: Number
});

module.exports = mongoose.model('User', model);