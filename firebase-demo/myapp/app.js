var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { initializeApp } = require('firebase/app');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk5yWcWg3LVn1MEA52BlQIvmLI0Z1iomU",
  authDomain: "simple-stuff-75aa4.firebaseapp.com",
  databaseURL: "https://simple-stuff-75aa4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simple-stuff-75aa4",
  storageBucket: "simple-stuff-75aa4.appspot.com",
  messagingSenderId: "314492477762",
  appId: "1:314492477762:web:2eb8bf1eb672bfba89a8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
