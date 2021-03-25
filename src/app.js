const express = require('express');
const morgan = require('morgan');
require('./db/database');
const app = express();

app.use(morgan('dev'));

app.use(require('./routes/index'));
/*app.use(require('./routes/user'));
app.use(require('./routes/product'));
app.use(require('./routes/track'));*/
module.exports = app;