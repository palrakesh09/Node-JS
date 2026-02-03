const r=require('express').Router();
const c=require('../controllers/showController');
r.get('/:id',c.byMovie);
module.exports=r;