var express = require('express');
var app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  const page = `${__dirname}/views/index.html`;
  response.sendFile(page);
})




































 module.exports = app;
