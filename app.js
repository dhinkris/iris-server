var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var cookieSession = require('cookie-session')

var conf = require('./config/config').get(process.env.NODE_ENV);

var index = require('./routes/index');
var users = require('./routes/users');
var routes = require('./routes/routes');

var app = express();

app.use(bodyParser.json());

// view engine setup

app.engine('html',cons.underscore);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'web')));
app.set('views', path.join(__dirname, 'web'));
app.use(express.static('./web'));

app.set('trust proxy', 1) // trust first proxy
app.use(cookieSession({
    name: 'session',
    keys: ['session-id']
}))

routes.configure(app);

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

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err.stack);
});

