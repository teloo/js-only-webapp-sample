var path = require('path');
var express = require('express');

var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('errorhandler')());

app.listen(port);
console.log('listening on port ' + port);
