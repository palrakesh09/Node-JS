const Admin = require("../models/Admin");
const Customer = require("../models/Customer");


exports.adminLogin = async(req,res)=>{
const a = await Admin.findOne(req.body);
if(a){res.cookie("admin",a._id);res.redirect("/admin/dashboard");}
else res.render("auth/login",{error:"Invalid"});
};


exports.userRegister = async(req,res)=>{
await Customer.create(req.body);
res.redirect("/auth/login");
};


exports.userLogin = async(req,res)=>{
const u = await Customer.findOne(req.body);
if(u){res.cookie("user",u._id);res.redirect("/");}
else res.render("auth/login",{error:"Invalid"});
};