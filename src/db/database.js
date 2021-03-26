const mongoose = require('mongoose');

//'mongodb://mongo/zebrans'
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('DB is conected to ', db.connection.host);

}).catch(err => console.error(err));

module.exports = mongoose;
