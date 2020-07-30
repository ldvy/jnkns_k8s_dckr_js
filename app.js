var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('static'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(80);

module.exports = app;

