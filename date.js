var http = require('http');
var dateTime = require('./module');
 
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current date and time: " + dateTime.CurrentDateTime());
    res.end();
}).listen(8080);