require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var GoogleSpreadsheet = require('google-spreadsheet');
const {promisify} = require('util');
creds = require('./client_secret.json');


var gsheetRoute = require('./routes/gsheet.route');


var port = process.env.PORT || 5000;

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
      name: 'AAA'
    });
  });
app.use('/gsheet', gsheetRoute);

  app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });

