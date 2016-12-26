var express = require('express');
var path = require('path');

var app = express();

app.use('/js', express.static(__dirname + '/bower_components/semantic/dist'));
app.use('/js', express.static(__dirname + '/bower_components/jquery/dist'));
app.use('/js', express.static(__dirname + '/bower_components/angular'));
app.use('/css', express.static(__dirname + '/bower_components/semantic/dist'));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, function () {
  console.log('myapp listening on port 3000!')
});

module.exports = app;


