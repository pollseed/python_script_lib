'use strict'

const PORT = 9000;

var http = require('http'),
    request = require('request'),
    setting = require('./settings'),
    fs = require('fs'),
    qs = require('querystring');

http.createServer((req, res) => {
        fs.readFile(/*__dirname +*/ 'index.html', 'utf-8', (err, data) => {
                res.write(data);
                res.end();
        });
}).listen(PORT, "0.0.0.0");

console.log(`server listening ... ${PORT}`);
