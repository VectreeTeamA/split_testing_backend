'use strict';

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
    usersRoute = require('./routes/user'),
    apiRoute = require('./routes/api');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/user', usersRoute);
app.use('/api', apiRoute);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

// this is our MongoDB database
require('dotenv').config();
const dbRoute = encodeURI(process.env.MONGO_URI);

console.log(process.env.MONGO_URI);

mongoose.connect(dbRoute, {
  useNewUrlParser: true
});
mongoose.set('useFindAndModify', false);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = app;
