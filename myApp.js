var express = require('express');
var app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  const page = `${__dirname}/views/index.html`;
  response.sendFile(page);
})


app.get('/json', (request, response) => {
  response.json({"message": "Hello json"});
})


 module.exports = app;
