const   express = require('express'),
		http = require('http'),
		fs = require('fs'),
		router = express.Router(),
		server = express(),
		httpport = 3333,
		httpsport = 8443;

server.use(express.compress());
server.use(express.static(__dirname + '/release',{ maxAge: 0 }));
server.use(express.static(__dirname + '/reports',{ maxAge: 0 }));

const   httpServer = http.createServer(server);

httpServer.listen(httpport);

console.log('Listening on http://localhost:' + httpport);
