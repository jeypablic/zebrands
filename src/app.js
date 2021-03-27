const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '../../doc'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/index'));
module.exports = app;