const http = require("http");
const fs = require("fs");

const loadFile = (filename) => {
    return new Promise ((resolve,reject) => {
        fs.readFile(`./${filename}`,"utf-8",(err,data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

const server = http.createServer(async (req,res) => {
    if(req.url == "/"){
        res.write(await loadFile("home.html"));
        res.end();
    }else if(req.url == "/about"){
        res.write(await loadFile("about.html"));
        res.end();
    }else if(req.url == "/contact"){
        res.write(await loadFile("contact.html"));
        res.end();
    }else{
        res.write("<h1>Page Not Found....</h1>");
        res.end();
    }
})

server.listen(3000,() => {
    console.log("Server running at http://localhost:3000");
});