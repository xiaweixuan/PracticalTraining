/**
 * 用户个人信息接口：(get)
 * 传入userid
 * 返回该用户信息
 */
const express = require('express');
const router = express.Router();
const showdata = require('./showdata');

var userName = '';

router.get('/',(req,res)=>{
    //获取前端传入的userid
    userName = req.query.userid;
    // console.log(userName);
    let selectsql = 'select * from user_table where userid="'+userName+'"';
    showdata(res,selectsql);
})

module.exports = router;