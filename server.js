"use strict";


var async = require('async');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var compress = require('compression');
var cookieParser = require('cookie-parser');
var express = require('express');
var session = require('express-session');
var path = require('path');
var _ = require('lodash');
var moment = require('moment');
var mongoose = require('mongoose');
var randomstring = require('randomstring');
var React = require('react');


// require('./config/passport')(passport); // pass passport for configuration

// //require Controllers
// var userCtrl = require('./controllers/usersCtrl.js')

// //require Models
// var User = require('./models/users.js');

// mongoose.connect('mongodb://travelroot:123456@ds019856.mlab.com:19856/travelmap');


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(compress())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/components',  express.static(__dirname + '/components'));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


app.get('/api/comments', function(req, res) {

    res.json( [
  {id: 1, author: "Pete Hunt", text: "This is one asdasdasdasdas"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
]  );

});







app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.use(function(req, res, next) {
  if (req.user) {
    res.cookie('user', JSON.stringify(req.user));
  }
  next();
});