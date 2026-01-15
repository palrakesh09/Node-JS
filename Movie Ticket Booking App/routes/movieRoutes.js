const r=require("express").Router();
const Movie=require("../models/Movie");


r.get("/",async(req,res)=>{
const movies=await Movie.find();
res.render("user/home",{movies});
});


r.get("/movie/:id",async(req,res)=>{
const m=await Movie.findById(req.params.id);
res.render("user/movieDetails",{movie:m});
});
module.exports=r;