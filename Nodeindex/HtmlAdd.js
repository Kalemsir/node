const http = require('http')
const fs = require('fs') //file system modülünü ekledik Html için

const server = http.createServer((req, res) =>{
    //console.log('Received request');  sadece konsolda yazdırır
    //console.log(req.url);   konsolda url'i yazdırır
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html'); //text/plain de olabilir plain düzyazı için

    let path = './';
    switch(req.url){
        case '/':
            path += 'HtmlAdd.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'mainpage.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location','/about')
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
            
        }
        else{
            res.end(data);
        }
        
    })
})
server.listen(3000,'localhost',()=>{
    console.log('Server is listening');
    })        