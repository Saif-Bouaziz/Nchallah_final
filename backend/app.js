var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require('mongoose'); 
require('dotenv').config()


const routerUsers= require('./routes/users.route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb://saif:ipeis2020@ac-zxwojzh-shard-00-00.7c4r6sr.mongodb.net:27017,ac-zxwojzh-shard-00-01.7c4r6sr.mongodb.net:27017,ac-zxwojzh-shard-00-02.7c4r6sr.mongodb.net:27017/test?ssl=true&replicaSet=atlas-msqy6z-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message)) 


app.use('/api', routerUsers)

module.exports = app;
