const r=require("express").Router();
const c=require("../controllers/authController");


r.get("/login",(req,res)=>res.render("auth/login"));
r.post("/login",c.userLogin);
r.post("/register",c.userRegister);
r.post("/admin-login",c.adminLogin);
module.exports=r;