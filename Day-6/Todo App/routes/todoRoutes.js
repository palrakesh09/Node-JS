const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);
router.post('/add', todoController.createTodo);
router.post('/toggle/:id', todoController.toggleTodo);
router.get('/edit/:id', todoController.getEditTodo);
router.post('/edit/:id', todoController.postEditTodo);
router.post('/delete/:id', todoController.deleteTodo);

module.exports = router;