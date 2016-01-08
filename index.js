var ejs = require('ejs');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var async = require('async');
var _basePath = __dirname + "/";
global._basePath = _basePath;
var app = {
    express: express(),
    async: async
};
global.app = app;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'game',
  debug    :  false
});
global.db = connection;


app.express.set('views', _basePath + './client/view');
app.express.set('view engine', 'ejs');
app.express.use(bodyParser.json());
app.express.use(session({secret: 'reqrutment123'}));

app.express.use("/css/", express.static(_basePath + './client/css'));
//app.express.use(express.static(_basePath + './client'));

var controllers = require(_basePath + './server/controllers');
controllers(app.express);


var server = app.express.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});