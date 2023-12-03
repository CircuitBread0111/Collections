const express        = require('express'),
      bodyParser     = require('body-parser'),
      methodOverride = require('method-override'),
      errorHandler   = require('errorhandler'),
      morgan         = require('morgan'),
      routes         = require('./backend'),
      api            = require('./backend/api');

const APP_PORT = 8080;

let app = module.exports = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/'));
app.use('/build', express.static('public'));

const env = process.env.NODE_ENV;
if ('development' == env) {
	app.use(errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
}

if ('production' == app.get('env')) {
	app.use(errorHandler());
}

app.get('/', routes.index);
app.get('/api/items', api.items);
app.post('/api/items', api.item);
app.delete('/api/items/:itemId', api.item);

app.listen(APP_PORT);
console.log("App running on port " + APP_PORT);
