const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = process.env.PORT || 8080;
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose
   .connect(process.env.DB_HOST)
   .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.get('/', (req, res) => res.send('What are you doing here!'));

// catch routing
require("./routes")(app);

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

// Launch app to listen to specified port
app.listen(port, async() => console.log("server running on port "+port));

module.exports = app;