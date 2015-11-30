var $ = require('jquery');

var enHelloWorld = {
  listen: function(callback) {
    $('#en-btn').click(function() {
      callback('Hello World!');
    });
  }
};

module.exports = enHelloWorld;
