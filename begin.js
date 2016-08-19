/*var express = require('express');
var fs = require('fs');
var app = express();
var router = express.Router();

app.use(express.compress());
app.use(express.static(__dirname + '/release',{ maxAge: 0 }));
app.use(express.static(__dirname + '/reports',{ maxAge: 0 }));

port = 3000;
app.listen(port);
console.log('Listening on port ' + port);
console.log('Go to http://localhost:' + port + ' in your browser.');*/

const createAssetsServer = require('./server')

createAssetsServer(8080, false, true, true);