const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


router.get('/', todoController.getTodos);
router.post('/add', todoController.addTodo);
router.get('/delete/:id', todoController.deleteTodo);
router.get('/toggle/:id', todoController.toggleTodo);
router.get('/edit/:id', todoController.editPage);
router.post('/update/:id', todoController.updateTodo);


module.exports = router;