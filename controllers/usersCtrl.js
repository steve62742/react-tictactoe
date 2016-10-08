var User = require('../models/users.js');
var userCtrl = require('express').Router();

userCtrl.login = function (req , res ) {
  res.send({
      "status": 1,
      "user":{
        "username": req.user.name ,
        "uid": req.user["_id"] ,
        "usermail":req.user.email
      }
  })
}

userCtrl.signup = function (req , res , next ) {
  var newuser = new User({
    email: req.body.usermail,
    password: req.body.userpassword,
    name: req.body.username
  });
  newuser.save(function(err , newuser) {
    if (err) return next(err);
    console.log("----");
    console.log(newuser);
    console.log("----");
    res.send({
      "status": 1,
      "user":{
        "username": newuser.name ,
        "uid": newuser["_id"] ,
        "usermail":newuser.email
      }
    })
  });
}


userCtrl.getByEmail = function(req, res) {
    var userEmail = req.body.userEmail;
    User.find( { email: userEmail } ,function(err, user) {
      console.log("user : -> "+user);
      res.send(user);
    });
}

userCtrl.edit = function (req , res ){
  var currentUser = req.body.curEmail;
  var editoptions = req.body.editoptions;
  User.findOneAndUpdate({ email: currentUser }, editoptions , function(err, user) {
    if (err) throw err;
    res.sendStatus(200);
  });
}

userCtrl.remove = function (req , res ){
  var currentUser = req.body.curEmail;
  User.findOneAndRemove({ email: currentUser }, function(err) {
    if (err) throw err;
    res.sendStatus(200);
  });
}

module.exports = userCtrl;