let mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: String,
    password: String, 
    firstName: String,
    lastName: String,
    email: String,
    registrationDate: String
});


module.exports = mongoose.model('User', userSchema);