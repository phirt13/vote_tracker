const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('/secret', (request, response) => {
  response.send('Well done.  Tell nobody!');
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log('server starting. available at http://localhost:' + port);
});
