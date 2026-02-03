const router=require('express').Router();
router.get('/',(req,res)=>res.render('payment'));
router.post('/success',(req,res)=>res.render('success'));
module.exports=router;