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
var imgRouter = require('./Routes/splashimg');
var setallRouter = require('./Routes/setall');
var addcollectRouter = require('./Routes/addcollection');
var perputRouter = require('./Routes/perput');

app.get('/', function(req, res) {
  res.setHeader('Content-Type','text/plain;charset="utf-8"')
  res.end(`hello word！`);
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
 * 用户名校验:/usrcnki
 * 图片获取:/img
 * 个人信息设置:/setall
 * 添加收藏:/addcollect
 * 发布:/perput
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
app.use('/img', imgRouter);
app.use('/setall', setallRouter);
app.use('/addcollect', addcollectRouter);
app.use('/perput', perputRouter);

//后台接口
var showuser = require('./BackManage/showuser');
app.use('/showuser', showuser);
var adduser = require('./BackManage/adduser');
app.use('/adduser', adduser);

var showpaint = require('./BackManage/showpaint');
app.use('/showpaint', showpaint);

var showwork = require('./BackManage/showwork');
app.use('/showwork', showwork);

var showcollect = require('./BackManage/showcollect');
app.use('/showcollect', showcollect);

app.listen(8080);
