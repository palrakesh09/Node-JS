const router=require('express').Router();
const {isAdmin}=require('../middleware/auth');
const Movie=require('../models/Movie');
router.get('/',isAdmin,async(req,res)=>{
const movies=await Movie.find();
res.render('admin/dashboard',{movies});
});
module.exports=router;