const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
    const db = mongoose.connect(config.db)
        .then(() => console.log('Sucsesfully connection...'))
        .catch(err => console.error('something is wrong', err));
    require('../app/models/user.server.model');
    return db;
}