const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const https = require('https');
const querystring = require('querystring');
const compression = require('compression');
const bodyParser = require('body-parser');

app.use(compression()); 
app.use(express.static(path.join(__dirname, 'build')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/charts/range/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });


app.listen(80);

