/**
 * 注册接口：(post)
 * 传入用户所有信息
 * 校验与数据库数据是否冲突
 * 无冲突，存入数据库
 * 返回是否注册成功信息
 */
const express = require('express');
const router = express.Router();
const connection = require('./usemysql');
const qs = require('querystring');


var isregister = false;
var db={};

let selectsql = 'SELECT * FROM user_table';

let insertsql = 'INSERT into user_table SET ?';

router.post('/',(req,res)=>{
    let user = {
        userid:'',
        pwd:'',
        email:'',
        avatarurl:'',
        motto:''
    }
    var data = '';
    
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        // console.log(data);
        // data = JSON.parse(JSON.stringify(qs.parse(data)));

        data = JSON.parse(data);

        // console.log(user);
        // console.log(data);
        user.userid = data.userid;
        user.pwd = data.pwd;
        user.email = data.email;
        // console.log(user);
        // console.log(data);
        connection.query(selectsql, (error,results,fields)=> {
            isregister = true;
            if (error) console.log(error.message);
            for(let i=0;i<results.length;i++){
                if(results[i].userid === user.userid){
                    isregister = false;
                }
            }
            if(!isregister){
                console.log("register failed");
                db = { state: 200, message: '注册失败', content: isregister };
            }else{
                console.log("register successfully");
                db = { state: 200, message: '注册成功', content: isregister };
                connection.query(insertsql,user);
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
});

module.exports = router;