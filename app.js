var express = require('express')
var app = express()
var router = express.Router()

app.use(express.static('public'))
app.use(express.static('pages'))

// app.get('/', function(req, res) {
//     res.sendfile('./public/index.html');
// });

app.listen(8000);