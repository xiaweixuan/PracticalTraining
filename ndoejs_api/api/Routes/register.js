const express = require('express');
const router = express.Router();
const connection = require('./usemysql');
const showdata = require('./showdata');
const lock = require('./lock');

var isregister = false;
var db={};

let selectsql = 'SELECT * FROM user_table';

let insertsql = 'INSERT into user_table SET ?';

router.post('/',(req,res)=>{
    let user = {
        userid:'',
        pwd:'',
        phonenum:'',
        avatarurl:'',
        motto:''
    }
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{

        data = data.split('&');
        for(let i= 0 ;i<data.length;i++){
            data[i]=data[i].split('=');
            user[data[i][0]]=data[i][1];
        }
        // console.log(data);
        console.log(user);
        // connection.query(insertsql,user);
        // showdata(res,selectsql);
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