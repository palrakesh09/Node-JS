const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');


router.get('/', controller.getBooks);
router.get('/add', controller.addPage);
router.post('/add', controller.addBook);
router.get('/edit/:id', controller.editPage);
router.post('/update/:id', controller.updateBook);
router.get('/delete/:id', controller.deleteBook);


module.exports = router;