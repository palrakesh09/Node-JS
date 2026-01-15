const Movie = require("../models/Movie");
const multer = require("multer");


const storage = multer.diskStorage({
destination:"public/uploads",
filename:(req,file,cb)=>cb(null,Date.now()+file.originalname)
});
exports.upload = multer({storage}).single("image");


exports.addMovie = async(req,res)=>{
await Movie.create({...req.body,image:req.file.filename});
res.redirect("/admin/movies");
};