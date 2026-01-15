let http = require("http");
let server = http.createServer((req,res) => {
    if(req.url == "/news"){
        let obj = {
            status: 1,
            data: [
                {
                    newsTitle:"ws",
                    newsDes:"Ws Hello"
                },
                {
                    newsTitle:"IIP",
                    newsDes:"IIP Hello"
                }
            ]
        }

        res.end(JSON.stringify(obj))
    }
    if(req.url == "/about"){
        
    }
    if(req.url == "/course"){
        
    }
    if(req.url == "/"){
        res.end("Welcome to NodeJS");
    }
})

server.listen("3000") // http://localhost:3000