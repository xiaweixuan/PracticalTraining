const connection = require('../Routes/usemysql');
const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    let selectsql = 'select * from collections_table';
    connection.query(selectsql,(error,results)=>{
        if (error) console.log(error.message);
        // console.log(results);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(results);
    });
})

module.exports = router;