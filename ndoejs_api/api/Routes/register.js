const express = require('express');
const router = express.Router();
const connection = require('./usemysql');
const lock = require('./lock');

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
    req.on('end',()=>{});

    connection.query(selectsql, (error,results,fields)=> {
        if (error) res.end(error.message);
        for(let i=0;i<results.length;i++){
            if(results[i][userid] === req.body.userid){
                console.log("register failed");
                res.end(false);
                break;
            }
        }
        user.userid = req.body.userid;
        user.pwd = lock(lock(req.body.pwd));
        user.phonenum = req.body.phonenum;
    });
    connection.query(insertsql,user, (error,results,fields)=> {
        if (error) res.end(error.message);
        console.log("register successfully");
        res.end(true);
    });
});

module.exports = router;