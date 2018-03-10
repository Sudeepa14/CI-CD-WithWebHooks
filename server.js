//server implementation
var express = require('express')
var app = express()                        // create our app w/ express
const path = require('path');
var port     =process.env.PORT || 8081;                // set the port
var bodyParser = require('body-parser'); 
var html = require('html');


// var fs = require('fs-extra');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const api=require('./routes.js');
app.use('/api', api);

app.listen(port);
console.log("App listening on port " + port);
module.exports = app;
