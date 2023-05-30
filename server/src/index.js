
const http = require("http");

const express = require('express')
const app = express()
const port = 8000

app.get('/users', (req, res) => {
  res.send('Hello users!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// How this page was created ??

/* 

=> npm init -y

=> npm install --save-dev nodemon

=> Inside index.js folder which is this or copied from expressjs.com 

{ 
    
    const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

}



=> Inside package.json 


"scripts": {
  "start": "nodemon app.js"
},


=> nodemon index.js







*/
