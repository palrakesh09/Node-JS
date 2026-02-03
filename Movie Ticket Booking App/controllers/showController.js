const Show = require('../models/Show');
exports.byMovie = async(req,res)=>{
const shows = await Show.find({movieId:req.params.id}).populate('screenId');
res.render('shows',{shows});
};