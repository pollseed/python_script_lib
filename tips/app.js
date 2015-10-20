'use strict'

const PORT = 9000;

var http = require('http'),
    request = require('request'),
    fs = require('fs'),
    qs = require('querystring'),
    express = require('express'),
    app = express(),
    server = http.Server(app),
    io = require('socket.io').listen(server);

// http.createServer((req, res) => {
//         fs.readFile(/*__dirname +*/ 'index.html', 'utf-8', (err, data) => {
//                 res.write(data);
//                 res.end();
//         });
// }).listen(PORT, "0.0.0.0");

server.listen(PORT, () => {console.log(`server listening ... ${PORT}`)});

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));
app.use(express.static('public'));
