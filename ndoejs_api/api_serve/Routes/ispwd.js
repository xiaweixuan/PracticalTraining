const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var isOK = false;

router.post('/',(req,res)=>{
    var data = '';
    var userid = '';
    var pwd = '';
    
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        userid = data.userid;
        pwd = data.pwd;
        let selectsql = 'select pwd from user_table where userid="'+userid+'"';
        connection.query(selectsql, (error,results,fields)=> {
            if(results[0].pwd === pwd){
                isOK = true;
            }else{
                isOK = false;
            }
            if(!isOK){
                console.log("pwd is woring");
                db = { state: 200, message: '密码不正确', content: isOK };
            }else{
                console.log("pwd is ok");
                db = { state: 200, message: '密码正确', content: isOK };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    })
})

module.exports = router;