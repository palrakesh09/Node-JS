const todoModel = require('../models/todoModel');

exports.getTodos = (req, res) => {
    const todos = todoModel.getAllTodos();
    res.render('index', { todos: todos });
};

exports.createTodo = (req, res) => {
    const { task } = req.body;
    if (task) {
        todoModel.addTodo(task);
    }
    res.redirect('/');
};

exports.toggleTodo = (req, res) => {
    const { id } = req.params;
    todoModel.toggleTodoCompleted(id);
    res.redirect('/');
};

exports.getEditTodo = (req, res) => {
    const { id } = req.params;
    const todo = todoModel.getTodoById(id);

    if (todo) {
        const todos = todoModel.getAllTodos();
        res.render('index', { 
            todos: todos, 
            editTodo: todo
        });
    } else {
        res.redirect('/');
    }
};

exports.postEditTodo = (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    
    todoModel.updateTodoTask(id, task);

    res.redirect('/');
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    todoModel.deleteTodo(id);
    res.redirect('/');
};