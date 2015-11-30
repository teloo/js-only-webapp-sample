var $ = require('jquery');

var enHelloWorld = require('./en-hello-world');
var jaHelloWorld = require('./ja-hello-world');

var callback = function(message) {
  $('#message-box').text(message);
};

enHelloWorld.listen(callback);
jaHelloWorld.listen(callback);
