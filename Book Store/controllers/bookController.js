const Book = require('../models/Book');


exports.getBooks = async (req, res) => {
const books = await Book.find();
res.render('index', { books });
};


exports.addPage = (req, res) => res.render('add');


exports.addBook = async (req, res) => {
await Book.create(req.body);
res.redirect('/');
};


exports.editPage = async (req, res) => {
const book = await Book.findById(req.params.id);
res.render('edit', { book });
};


exports.updateBook = async (req, res) => {
await Book.findByIdAndUpdate(req.params.id, req.body);
res.redirect('/');
};


exports.deleteBook = async (req, res) => {
await Book.findByIdAndDelete(req.params.id);
res.redirect('/');
};