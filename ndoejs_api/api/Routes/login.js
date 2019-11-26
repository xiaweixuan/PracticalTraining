const express = require('express');
const router = express.Router();
const connection = require('./usemysql');
const lock = require('./lock');

let  sql = 'SELECT * FROM user_table';
 
connection.query(sql, (error,results,fields)=> {
//error,results,fields:错误对象，json数组，数据信息数组
    if (error) console.log(error.message);
    router.post('/',(req,res)=>{
        //返回前台信息
        for(let i=0;i<results.length;i++){
        if(results[i][userid] === req.body.userid && lock(lock(results[i][pwd])) === lock(lock(req.body.pwd))){
                console.log("Landing successfully");
                res.end(true);
                break;
                // 打印前台数据
                // console.log('login：');
                // console.log(req.query);
            }
        }
        console.log("Landing failed");
        res.end(false);
    })
});

module.exports = router;