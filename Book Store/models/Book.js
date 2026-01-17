const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
title: String,
author: String,
category: String,
price: Number,
stock: Number
});


module.exports = mongoose.model('Book', bookSchema);