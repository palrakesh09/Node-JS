const Ticket = require("../models/Ticket");


exports.book = async(req,res)=>{
await Ticket.create({
...req.body,
customerId:req.cookies.user,
bookingDate:new Date().toLocaleDateString()
});
res.redirect("/");
};