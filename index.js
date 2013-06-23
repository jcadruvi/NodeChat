var express = require('express');
var app = express();
var port = 8080;
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function (request, response) {
    response.render("page");
});

app.listen(port);

console.log('Server started');