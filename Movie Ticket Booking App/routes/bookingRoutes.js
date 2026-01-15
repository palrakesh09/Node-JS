const r=require("express").Router();
const c=require("../controllers/bookingController");
r.post("/book",c.book);
module.exports=r;