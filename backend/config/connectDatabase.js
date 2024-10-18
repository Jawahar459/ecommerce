const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((con) => {
        console.log('MongoDB connected to host: ' + con.connection.host);
    }).catch((err) => {
        console.error('Connection error', err);
    });
};

module.exports = connectDatabase;
