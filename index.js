const http = require('http');
const fs = require('fs');

const port = process.env.port || 9000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    const u = req.url;
    var data = "";
    switch(u)
    {
    case '/':
        res.statusCode = 200;
        data = fs.readFileSync('index.html');
         res.end(data);
         break;
     
    case '/about':
          res.statusCode = 200;
          data = fs.readFileSync('about.html');
          res.end(data);
          break;

    case '/contact':
          res.statusCode = 200;
          data = fs.readFileSync('contact-me.html');
          res.end(data);
          break; 
    default:
        res.statusCode = 404;
        data = fs.readFileSync('404.html');
          res.end(data);         

    }


    // if(req.url == '/'){
    //      res.statusCode = 200;
    //      const data = fs.readFileSync('index.html');
    //      res.end(data);
    // }
    // else if(req.url == '/about'){
    //     res.statusCode = 200;
    //     const data = fs.readFileSync('about.html');
    //     res.end(data.toString());
    // }
    // else if(req.url == '/contact')
    // {
    //     res.statusCode = 200;
    //     const data = fs.readFileSync('contact.html');
    //     res.end(data.toString());
    // }
    // else{
    //     res.statusCode = 404;
    //     const data = fs.readFileSync('404.html');
    //     res.end(data);
    // }

});








server.listen(port , ()=>{
    console.log(`Server is on and Running on port   ${port}`);
});


