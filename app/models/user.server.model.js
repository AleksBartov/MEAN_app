const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, 'Please fill a valide e-mail address']
    },
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    password: {
        type: String,
        validate: [(password) => {
return password && password.length > 6;
        }, 'Password sould be longer']
    },
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('User', UserSchema);