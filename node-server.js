const   express = require('express'),
		http = require('http'),
		https = require('https'),
		fs = require('fs'),
		router = express.Router(),
		server = express(),
		sslOptions = {
			key: fs.readFileSync('key.pem'),
			cert: fs.readFileSync('cert.pem'),
			passphrase: '0244'
		},
		httpport = 3333,
		httpsport = 8443;

server.use(express.compress());
server.use(express.static(__dirname + '/release',{ maxAge: 0 }));
server.use(express.static(__dirname + '/reports',{ maxAge: 0 }));

const   httpServer = http.createServer(server),
		httpsServer = https.createServer(sslOptions, server);

httpServer.listen(httpport);
httpsServer.listen(httpsport);

console.log('Listening on http://localhost:' + httpport);
console.log('Listening on https://localhost:' + httpsport);
