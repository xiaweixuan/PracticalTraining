/**
 * 修改个性签名接口：(post)
 * 传入userid、motto
 * 返回是否修改成功
 */
const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var db = {};
var isset = false;

router.post('/',(req,res)=>{
    var userid = '';
    var motto = '';
    
    var data = '';
    
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        
        userid = data.userid;
        motto = data.motto;
        console.log(data);
        let updatesql = 'UPDATE user_table set motto="'+motto+'" where userid="'+userid+'"';
        let selectsql = 'SELECT * from user_table where userid="'+userid+'"';
        connection.query(selectsql, (error,results,fields)=> {
            if (error) {console.log(error.message);isset = false;}

            if(JSON.stringify(results) === '[]'){
                isset = false;
            }else{
                isset = true;
                } 
            if(!isset){
                console.log("set failed");
                db = { state: 200, message: '修改失败', content: isset };
            }else{
                connection.query(updatesql);
                console.log("set successfully");
                db = { state: 200, message: '修改成功', content: isset };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    });
});

module.exports = router;
