const Ticket = require('../models/Ticket');
const Show = require('../models/Show');
exports.bookPage = async(req,res)=>{
const show = await Show.findById(req.params.id);
res.render('book',{show});
};
exports.book = async(req,res)=>{
await Ticket.create(req.body);
res.redirect('/');
};