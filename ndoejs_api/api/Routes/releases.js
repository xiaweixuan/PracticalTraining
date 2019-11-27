const express = require('express');
const router = express.Router();
const showdata = require('./showdata');

var userName = 'admin';

router.get('/',(req,res)=>{
    let selectsql = 'select * from paint_table where userid<>"'+userName+'"';
    showdata(res,selectsql);
})

module.exports = router;