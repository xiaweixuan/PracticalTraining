const express = require('express');
const router = express.Router();
const connection = require('../Routes/usemysql');

var db = {};
var isset = false;

router.post('/',(req,res)=>{
    var olduserid = '';
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
        
        olduserid = data.olduserid;
        
        let updatesql = 'UPDATE user_table SET ? where userid="'+olduserid+'"';
        let selectsql = 'SELECT * from user_table where userid="'+olduserid+'"';

        user.userid = data.userid;
        user.pwd = data.pwd;
        user.email = data.email;
        user.avatarurl = data.avatarurl;
        user.motto = data.motto;
        connection.query(selectsql, (error,results,fields)=> {
            if (error) {console.log(error.message);isset = false;}

            if(JSON.stringify(results) === '[]'){
                isset = false;
            }else{
                isset = true;
            } 
            if(!isset){
                // console.log("修改失败");
                db = { state: 200, message: '修改失败', content: isset };
            }else{
                connection.query(updatesql,user);
                // console.log("修改成功");
                db = { state: 200, message: '修改成功', content: isset };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    });
});

module.exports = router;