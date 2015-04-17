var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.get("/secret", function(request, response) {
  response.send('Well done.  Tell nobody!');

});

app.get("/", function(request, response) {
  response.sendFile(__dirname + '/public/kittyindex.html');
});

app.listen(port, function() {
  console.log("server starting. available at http://localhost:" + port);
});
// 'use strict';

// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + '/public'));

// app.get('/secret', function(request, response) {
//   response.status(200).send('<h1>Hello Stranger!</h1>');
// });

// app.get('/greet/:person', function(req, res) {
//   respose.send('Well done! You found the secret. Now tell nobody...')
// });

// app.get('/*', function(req, res) {
//   res.status(404).send('could not find page');
// });

// app.listen(process.env.PORT || 3000, function() {
//   console.log('server running');
// });
