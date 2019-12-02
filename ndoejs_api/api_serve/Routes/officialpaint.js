/**
 * 官方图片接口：(get)
 * 返回userid为admin的图片数据
 */

const express = require('express');
const router = express.Router();
const showdata = require('./showdata');

var userName = 'admin';

router.get('/',(req,res)=>{
    let selectsql = 'select * from paint_table where userid="'+userName+'"';
    showdata(res,selectsql);
})

module.exports = router;