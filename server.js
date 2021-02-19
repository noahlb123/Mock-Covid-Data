var express = require('express');


// running the server
var app = express();
const port = process.env.PORT || 4000;
var server = app.listen(port, listening);

function listening(){
  console.log('listening at port ' + port + '...');
}

app.use(express.static('public'));
