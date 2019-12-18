/**
 * 密码保存：(post)
 * 传入userid,pwd
 * 返回密码是否成功重设
 */
const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var isOK = false;
var db = {};

router.post('/',(req,res)=>{
    var data = '';
    var user = {
        userid : '',
        pwd : ''
    }
    
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        user.userid = data.userid;
        user.pwd = data.pwd;
        let selectsql = 'select pwd from user_table where userid="'+user.userid+'"';
        let updatesql = 'UPDATE user_table SET ? where userid="'+user.userid+'"';

        connection.query(selectsql, (error,results,fields)=> {
            if(results[0].pwd === user.pwd){
                isOK = false;
            }else{
                isOK = true;
            }
            if(!isOK){
                console.log("resetpwd is wroing");
                db = { state: 200, message: '密码重置失败,新密码不能与旧密码相同！', content: isOK };
            }else{
                console.log("resetpwd is ok");
                connection.query(updatesql,user);
                db = { state: 200, message: '密码重置成功！', content: isOK };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    })
})

module.exports = router;