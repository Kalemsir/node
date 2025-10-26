const http = require('http')

const server = http.createServer((req, res) =>{
    //console.log('Received request');  sadece konsolda yazdırır
    //console.log(req.url);   konsolda url'i yazdırır
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html'); //text/plain de olabilir plain düzyazı için
    res.write('<head><title>wass upp</title></head>');
    res.write('<h1>Whatsuppppppp</h1>');
    res.end();
    })
server.listen(3000,'localhost',()=>{
    console.log('Server is listening');
    })        