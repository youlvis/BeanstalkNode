const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
app.use('/public', express.static('public'))
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');