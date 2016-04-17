var express = require('express');
var bodyParser = require('body-parser');
var aperoBot = require('./aperobot');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) {res.redirect('https://github.com/WheelyWonka/aperoBot/');
app.post('/fr', aperoBot.aperoBot);
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('aperoBot listening on port ' + port);
});