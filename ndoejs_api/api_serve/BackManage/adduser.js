const express = require('express');
const router = express.Router();
const connection = require('../Routes/usemysql');

var isOK = false;
var db = {};

var selectsql = 'SELECT * FROM user_table';

var insertsql = 'INSERT into user_table SET ?';

router.post('/',(req,res)=>{
    var user = {
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
        data = JSON.parse(data);
        
        user.userid = data.userid;
        user.pwd = data.pwd;
        user.email = data.email;
        user.avatarurl = data.avatarurl;
        user.motto = data.motto;
        // console.log(user);

        connection.query(selectsql, (error,results,fields)=> {
            if (error) console.log(error.message);
            isOK = true;
            for(let i=0;i<results.length;i++){
                if(results[i].userid === user.userid){
                    isOK = false;
                }
            }
            if(isOK){
                connection.query(insertsql,user);
                // console.log('添加成功');
                db = { state: 200, message: '添加成功', content: isOK };
            }else{
                // console.log('添加失败');
                db = { state: 200, message: '添加失败', content: isOK };
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
});

module.exports = router;