var express = require('express');
//var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));
//app.set('views', './views');
//configure app
//use midddleware
//define routes
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send('hello, express!');
	//res.render('pages/index');
});

// app.listen(1337, function(){
// 	console.log('ready on port 1337');
// });

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});











// var http = require('http');
//
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
//
// console.log('Server running at http://127.0.0.1:1337/');