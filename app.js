process.env.TZ = 'America/Sao_Paulo';

const express = require('express');
const logger = require('morgan');
var bodyParser = require('body-parser');
const app = express();
global.router = express.Router();

//components
const index = require('./controller/index');
const log = global.log = require('./lib/log').create_log('fiap.log');

require('./infra/create_tables');

app.set('log', log);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

module.exports = app;
