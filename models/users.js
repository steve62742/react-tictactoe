// grab the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UsersSchema = new mongoose.Schema(
  {
    id : String ,
    name : String ,
    lastname : String ,
    type : String ,
    country : String ,
    email : String ,
    mobile : String ,
    phone : String ,
    bio : String ,
    birthdate : Date ,
    password : String,
    pic : String,
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
  }
);



UsersSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};


UsersSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});


var User = mongoose.model('User', UsersSchema);
// make this available to our users in our Node applications
module.exports = User;