// Create web server
// Run: node comment.js
// Test: http://localhost:3000
// Test: http://localhost:3000/echo
// Test: http://localhost:3000/echo?message=Hello
// Test: http://localhost:3000/echo?message=Hello&name=John
// Test: http://localhost:3000/echo?message=Hello&name=John&age=25

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
  console.log(req.method, req.url);

  var urlParsed = url.parse(req.url, true);
  console.log(urlParsed);

  if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache');
    res.end(urlParsed.query.message);
  } else {
    res.statusCode = 404; // Not Found
    res.end("Page not found");
  }
});

server.listen(3000, '