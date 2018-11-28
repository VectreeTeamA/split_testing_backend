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

mongoose.connect(`mongodb://JerkFace:GBGBcmrf321@ds113454.mlab.com:13454/split_test`, {
    useNewUrlParser: true
});
mongoose.set('useFindAndModify', false);


module.exports = app;