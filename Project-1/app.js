const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views","./views");

app.use( "/assets" ,express.static( "assets"));

app.get("/",(req,res) => {
    res.redirect("home");
})

app.get("/home",(req,res) => {
    res.render("home");
})
app.get("/about",(req,res) => {
    res.render("about");
})
app.get("/contact",(req,res) => {
    res.render("contact");
})
app.get("/course-details",(req,res) => {
    res.render("course-details");
})
app.get("/courses",(req,res) => {
    res.render("courses");
})
app.get("/events",(req,res) => {
    res.render("events");
})
app.get("/pricing",(req,res) => {
    res.render("pricing");
})
app.get("/starter-page",(req,res) => {
    res.render("starter-page");
})
app.get("/trainers",(req,res) => {
    res.render("trainers");
})

app.listen(3000,() => {
    console.log("Server is running on port 3000");
    
})