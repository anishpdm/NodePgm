var http = require('http'),
    os = require('os'),
    express = require('express');

var app = express();
app.get('/anish', function(req,res){

	// res.end(os.release());

	console.log(os.uptime());
});


http.createServer(app).listen(3000);

