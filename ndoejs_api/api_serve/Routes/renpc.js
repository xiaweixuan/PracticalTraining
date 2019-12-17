const express = require('express');
const router = express.Router();
const showdata = require('./showdata');


router.get('/',(req,res)=>{
    let selectsql = 'select * from paint_table_new where userid="npc"';
    showdata(res,selectsql);
})

module.exports = router;