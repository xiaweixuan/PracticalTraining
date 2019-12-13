/**
 * 个人信息设置接口:(post)
 * 传入用户olduserid，及全部修改后信息
 * 返回是否修改成功信息
 */
const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

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

        let updatepaintsql = 'UPDATE paint_table_new SET userid="'+user.userid+'" where userid="'+olduserid+'"';
        let updateworksql = 'UPDATE works_table SET userid="'+user.userid+'" where userid="'+olduserid+'"';
        let updatecollectsql = 'UPDATE collections_table SET userid="'+user.userid+'" where userid="'+olduserid+'"';

        connection.query(selectsql, (error,results,fields)=> {
            // console.log(typeof results);
            // console.log(typeof JSON.stringify(results));
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
                connection.query(updatepaintsql);
                connection.query(updateworksql);
                connection.query(updatecollectsql);
                connection.query(updatesql,user);
                console.log("set successfully");
                db = { state: 200, message: '修改成功', content: isset };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    });
});

module.exports = router;