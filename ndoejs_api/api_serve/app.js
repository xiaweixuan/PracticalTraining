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
var avatarRouter = require('./Routes/avatarurl');
var mottoRouter = require('./Routes/motto');

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
app.use('/avatar', avatarRouter);
app.use('/motto', mottoRouter);

//后台接口
var showuser = require('./BackManage/showuser');
app.use('/showuser', showuser);
var adduser = require('./BackManage/adduser');
app.use('/adduser', adduser);
var updateuser = require('./BackManage/updateuser');
app.use('/updateuser', updateuser);
// var deleteuser = require('./BackManage/deleteuser');
// app.use('/deleteuser', deleteuser);

var showpaint = require('./BackManage/showpaint');
app.use('/showpaint', showpaint);
var addpaint = require('./BackManage/addpaint');
app.use('/addpaint', addpaint);
var updatepaint = require('./BackManage/updatepaint');
app.use('/updatepaint', updatepaint);
// var deletepaint = require('./BackManage/deletepaint');
// app.use('/deletepaint', deletepaint);

var showwork = require('./BackManage/showwork');
app.use('/showwork', showwork);
var addwork = require('./BackManage/addwork');
app.use('/addwork', addwork);
var updatework = require('./BackManage/updatework');
app.use('/updatework', updatework);
// var deletework = require('./BackManage/deletework');
// app.use('/deletework', deletework);

var showcollect = require('./BackManage/showcollect');
app.use('/showcollect', showcollect);
var addcollects = require('./BackManage/addcollect');
app.use('/addcollects', addcollects);
var updatecollect = require('./BackManage/updatecollect');
app.use('/updatecollect', updatecollect);
// var deletecollect = require('./BackManage/deletecollect');
// app.use('/deletecollect', deletecollect);

app.listen(8080);
