const express = require("express");
const ejs = require("ejs");

const server = express();
server.set("view engine","ejs");

server.get("/",(req,res) => {
    res.render("index",{page:"Home"})
})
server.get("/about",(req,res) => {
    res.render("./Pages/about",{page:"About"})
})
server.get("/contact",(req,res) => {
    res.render("./Pages/contact",{page:"Contact"})
})
server.get("/service",(req,res) => {
    res.render("./Pages/service",{page:"Service"})
})


server.listen(3000,(err) => {
    if(!err){
        console.log("Server is running at http://localhost:3000");
    }else{
        console.log("Error",err)
    }
})