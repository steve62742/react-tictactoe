"use strict";


var bodyParser = require('body-parser');
var compress = require('compression');
var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(compress())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/components',  express.static(__dirname + '/components'));

