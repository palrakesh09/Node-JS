const Todo = require('../models/todo');


let todos = [];
let counter = 1;


exports.getTodos = (req, res) => {
res.render('index', { todos });
};


exports.addTodo = (req, res) => {
const newTodo = new Todo(counter++, req.body.title);
todos.push(newTodo);
res.redirect('/');
};


exports.deleteTodo = (req, res) => {
const id = parseInt(req.params.id);
todos = todos.filter(todo => todo.id !== id);
res.redirect('/');
};


exports.toggleTodo = (req, res) => {
const id = parseInt(req.params.id);
const todo = todos.find(t => t.id === id);
if (todo) todo.completed = !todo.completed;
res.redirect('/');
};


exports.editPage = (req, res) => {
const id = parseInt(req.params.id);
const todo = todos.find(t => t.id === id);
res.render('edit', { todo });
};


exports.updateTodo = (req, res) => {
const id = parseInt(req.params.id);
const todo = todos.find(t => t.id === id);
if (todo) todo.title = req.body.title;
res.redirect('/');
};