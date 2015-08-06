/**
 * Created by Antonina_Malyarenko on 8/6/2015.
 */
var express = require('express');
var app = express();

app.post('/user', function (req, res) {
    var data = req.body;
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});