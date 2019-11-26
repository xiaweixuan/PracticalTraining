const express = require('express');
const router = express.Router();
const showdata = require('./showdata');

var userName = '';

router.get('/',(req,res)=>{
    //获取前端传入的userid
    userName = req.query.userid;
    // console.log(userName);
    let selectsql = 'select * from paint_table where paintid in( select distinct paintid from works_table where userid="'+userName+'")';
    showdata(res,selectsql);
})

module.exports = router;