/**
 * 社区信息接口：(get)
 * 返回userid不为admin的画作信息
 */
const express = require('express');
const router = express.Router();
const showdata = require('./showdata');

var userName = 'admin';

router.get('/',(req,res)=>{

    let selectsql = 'select * from paint_table_new where userid<>"'+userName+'" and type<>"'+userName+'"';
    showdata(res,selectsql);
})

module.exports = router;