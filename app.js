/**
 * Hosts the latest grafana and elasticsearch behind Google OAuth2 Authentication
 * with nodejs and express.
 * License: MIT
 * Copyright: Funplus Game Inc.
 * Author: strima
 * Original Author: Fang Li.
 * Project: https://github.com/strima/grafana-authentication-proxy
 */
var dotenv = require('dotenv');
if (process.env.NODE_ENV != 'production') {
  dotenv.load();
}

var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var config = require('./config');
var app = express();

app.use(express.logger());

console.log('Server starting...');

if (!config.base_path) {  config.base_path="" }

app.use(express.cookieParser());
app.use(express.session({ secret: config.cookie_secret }));
//require('./lib/google-oauth').configureOAuth(express, app, config);

// Serve all grafana frontend files
app.use(express.compress());
app.use(config.base_path + '/', express.static(__dirname + '/grafana', {maxAge: config.brower_cache_maxage || 0}));


run();

function run() {
  if (config.enable_ssl_port === true) {
    var options = {
      key: fs.readFileSync(config.ssl_key_file),
      cert: fs.readFileSync(config.ssl_cert_file),
    };
    https.createServer(options, app).listen(config.listen_port_ssl);
    console.log('Server listening on ' + config.listen_port_ssl + '(SSL)');
  }
  http.createServer(app).listen(config.listen_port);
  console.log('Server listening on ' + config.listen_port);
}
