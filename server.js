// Dependencies
const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

// Port configuration
var port = 443

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/xxxxxxxxxxxDOMAINxxxxxxxxxxx/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/xxxxxxxxxxxDOMAINxxxxxxxxxxx/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/xxxxxxxxxxxDOMAINxxxxxxxxxxx/chain.pem', 'utf8');
const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

// Server https
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
	console.log('Server port : ' + port);
});

// Api and extended log server request
app.use((req, res) => {
	console.log('New Client Connection ---IP--->  ' + req.socket.remoteFamily + req.socket.remoteAddress);
	console.log('                      --PORT-->  ' + req.socket.remotePort);
	console.log(req.method);
	console.log(req.headers);
	console.log(req.url);
	console.log('-------------------------------------------------------------------------');
	res.send('HTTPS test server');
});
