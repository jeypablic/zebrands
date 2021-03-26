const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/zebrans', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('DB is conected to ', db.connection.host);

}).catch(err => console.error(err));

module.exports = mongoose;
