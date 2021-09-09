var express = require('express');
require("dotenv").config();
var app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  const page = `${__dirname}/views/index.html`;
  response.sendFile(page);
})


app.get('/json', (request, response) => {
  const msgHello = 'Hello json';
  const message = process.env.MESSAGE_STYLE === 'uppercase' ? msgHello.toUpperCase() : msgHello;
  response.json({ message });
})


 module.exports = app;
