const mongoose = require('mongoose');

var model = mongoose.Schema({
    name: String,
    accion: String,
    product: Object
});

module.exports = mongoose.model('User', model);