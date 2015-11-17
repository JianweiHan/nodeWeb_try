var express = require('express');
var bodyParser = require('body-parser');
//var path = require('path');


//configure app

var app = express();
app.set('port', (process.env.PORT || 5000));
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));
//app.set('views', './views');

//use midddleware

app.use(bodyParser());

//define routes
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', function(req, res){
// 	res.send('hello, express!');
// 	//res.render('pages/index');
// });


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*
app.get('/', function(request, response) {
  response.render('pages/index');
});
*/

var todoItems = [
  {id: 1, desc: 'foo' },
  {id: 2, desc: 'bar' },
  {id: 3, desc: 'baz' }
];

app.get('/', function(request, response) {
  response.render('pages/index',{
	  title: "My App",
	  items: todoItems
  });
});


app.post('/add', function(req, res){
	var newItem = req.body.newItem;
	todoItems.push({
		id: 0,
		desc: newItem
	});
	
	
	res.redirect('/');
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