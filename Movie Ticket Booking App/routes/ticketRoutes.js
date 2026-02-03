const r=require('express').Router();
const c=require('../controllers/ticketController');
r.get('/book/:id',c.bookPage);
r.post('/book',c.book);
module.exports=r;