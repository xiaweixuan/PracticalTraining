/**
 * 用户的发布接口：(get)
 * 传入用户userid
 * 返回userid用户的画作信息
 */
const express = require('express');
const router = express.Router();
const showdata = require('./showdata');

var userName = '';

router.get('/',(req,res)=>{
    userName = req.query.userid;
    let selectsql = 'select * from paint_table where userid="'+userName+'"';
    showdata(res,selectsql);
})

module.exports = router;