var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/cart', require('./controller'));

app.listen(3000, function () {
  console.log('Express running on port 3000!');
})
