var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Lab1<hr>Hello, <b><i>Snown005</i></b>');
  res.end();
}).listen(8080);//