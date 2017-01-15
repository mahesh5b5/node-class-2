var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world!');
});

app.get('/home', function(req, res) {
    res.send('<h1>Im home</h1>');
});

app.get('/download', function(req, res) {
    res.download('./package.json', function() {
        console.log('download complete!');
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('im running ' + port);
});