const fs = require('fs');
const http = require('http');
const https = require('https');
const app = require('./app');

const privateKey = fs.readFileSync('10858869_localhost.key');
const publicKey = fs.readFileSync('10858869_localhost.cert');

const port = process.env.PORT || 3000;

//const server = https.createServer({ key: privateKey, cert: publicKey }, app);
const server = http.createServer(app);

server.listen(port);