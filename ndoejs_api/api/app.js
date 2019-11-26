const express = require('express');
const app = express();

var loginRouter = require('./Routes/login');
var registerRouter = require('./Routes/register');
var personalRouter = require('./Routes/personal');
var offpaintRouter = require('./Routes/officialpaint');
var perpaintRouter = require('./Routes/personalpaint');
var releasesRouter = require('./Routes/releases');
var collectionRouter = require('./Routes/collections');
var workRouter = require('./Routes/works');

app.get('/', function(req, res) {
  res.end('hello world');
});

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/personal', personalRouter);
app.use('/offpaint', offpaintRouter);
app.use('/perpaint', perpaintRouter);
app.use('/releases', releasesRouter);
app.use('/collection', collectionRouter);
app.use('/work', workRouter);

app.listen(8080);
