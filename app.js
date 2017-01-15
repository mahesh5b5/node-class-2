var express = require('express');
var chalk = require('chalk');
var app = express();

app.get('/', function(req, res) {
    res.send('hello world!');
});

app.get('/home', function(req, res) {
    res.send('<h1>Im home</h1>');
});

var port = process.env.npm_package_config_port;

app.listen(port, function() {
    console.log(chalk.yellow('im running ' + port));
});