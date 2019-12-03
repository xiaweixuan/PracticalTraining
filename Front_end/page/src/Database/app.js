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
var usrcnkiRouter = require('./Routes/usrcnki');

app.get('/', function(req, res) {
  res.end('hello world');
});

/**
 * 接口
 * 
 * 登陆:/login
 * 注册:/register
 * 个人:/personal
 * 官方图:/offpaint
 * 上传图:/perpaint
 * 社区:/releases
 * 收藏:/collection
 * 作品:/work
 */

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/personal', personalRouter);
app.use('/offpaint', offpaintRouter);
app.use('/perpaint', perpaintRouter);
app.use('/releases', releasesRouter);
app.use('/collection', collectionRouter);
app.use('/work', workRouter);
app.use('/usrcnki', usrcnkiRouter);

app.listen(8080);
