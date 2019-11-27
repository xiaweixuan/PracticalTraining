const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const connection = require('./usemysql');
const lock = require('./lock');

let  sql = 'SELECT * FROM user_table';
var islogin = false;

router.post('/',(req,res)=>{
    let user = {
        userid:'',
        pwd:''
    }
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        // console.log(data);
        data = data.split('&');
        for(let i= 0 ;i<data.length;i++){
            data[i]=data[i].split('=');
            user[data[i][0]]=data[i][1];
        }
        // console.log(data);
        // console.log(user);
        connection.query(sql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            // console.log(results[1].userid);
            islogin = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.length;i++){
                if(results[i].userid === user.userid && results[i].pwd === user.pwd){
                    islogin = true;
                    break;
                }
            }
            // if(!islogin){
            //     console.log("Landing failed");
            // }else{
            //     console.log("Landing successfully");
            // };
            let db = { state: 200, message: '获取成功', content: islogin };
            res.json(db);
        });
    });

});

module.exports = router;