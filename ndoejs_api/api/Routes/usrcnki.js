const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var userName = '';
var db = {};
var isOK = false;

router.get('/',(req,res)=>{
    //获取前端传入的userid
    userName = req.query.userid;
    // console.log(userName);
    let selectsql = 'select userid from user_table where userid="'+userName+'"';

    connection.query(selectsql, (error,results,fields)=> {
        isOK = true;
        if (error) console.log(error.message);
        for(let i=0;i<results.length;i++){
            if(results[i].userid === userName){
                isOK = false;
                break;
            }
        }
        if(!isOK){
            console.log("username can’t use");
            db = { state: 200, message: '用户名不可用', content: isOK };
        }else{
            console.log("username is ok");
            db = { state: 200, message: '用户名可用', content: isOK };
        };
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(db);
    });
})

module.exports = router;