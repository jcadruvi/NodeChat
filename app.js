var express = require('express');
var app = express();
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function (request, response) {
    response.render("page");
}).listen(8080);

console.log('Server started');