var http = require('http'),
    os = require('os'),
    express = require('express');

var app = express();
app.get('/anish', function(req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});

	res.end(os.release());

});


http.createServer(app).listen(3000, 'localhost');

