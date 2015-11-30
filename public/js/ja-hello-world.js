var $ = require('jquery');

var jaHelloWorld = {
  listen: function(callback) {
    $('#ja-btn').click(function() {
      callback('こんにちは、世界！');
    });
  }
};

module.exports = jaHelloWorld;
