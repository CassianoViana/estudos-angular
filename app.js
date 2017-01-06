var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

let PORT = process.env.port || 3201;

app.listen(PORT, function () {
  console.log('myapp listening on port: ', PORT);
});

app.get('*', function(req, res){
	res.sendfile('./public/index.html');
});

module.exports = app;


