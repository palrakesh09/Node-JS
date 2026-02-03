const r=require('express').Router();
const c=require('../controllers/movieController');
r.get('/',c.list);
module.exports=r;