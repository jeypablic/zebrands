const mongoose = require('mongoose');

/*const pool = async function connection() {
    await mongoose.connect('mongodb://mongo/zebrans', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => {
        console.log('DB is conected to ', db.connection.host);

    }).catch(err => console.error(err));
}*/

mongoose.connect('mongodb://mongo/zebrans', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('DB is conected to ', db.connection.host);

}).catch(err => console.error(err));

module.exports = mongoose;
