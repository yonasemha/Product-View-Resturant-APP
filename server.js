const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('config')
//const config = require('./db');

const db = config.get('mongoURI')
const users = require('./routes/api/authenticate');
const menuList = require('./routes/api/menuList')
const comment = require('./routes/api/comment')

mongoose.connect(db, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// app.get('/', menuList);
app.use('/api/users', users);
app.use(menuList);
app.use(comment);

app.get('/', function (req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});