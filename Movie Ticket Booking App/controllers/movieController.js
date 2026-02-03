const Movie = require('../models/Movie');
exports.list = async(req,res)=>{
const movies = await Movie.find();
console.log(movies);

res.render('movies',{movies});
};