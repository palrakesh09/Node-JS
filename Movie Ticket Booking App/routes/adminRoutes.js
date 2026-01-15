const r = require("express").Router();
const c = require("../controllers/adminController");
const a = require("../middlewares/adminAuth");


r.get("/dashboard",a,(req,res)=>res.render("admin/dashboard"));
r.get("/add-movie",a,(req,res)=>res.render("admin/addMovie"));
r.post("/add-movie",a,c.upload,c.addMovie);
module.exports=r;