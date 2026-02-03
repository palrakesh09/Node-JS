const mongoose = require('mongoose');
module.exports = mongoose.model('Customer', new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String
}));