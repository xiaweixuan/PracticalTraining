const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var iscollect = false;
var db={};

router.post('/',(req,res)=>{

    var data = '';
    
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        // console.log(data);
        var selectsql = 'select paintid from collections_table where userid="'+data.userid+'"';
        var insertsql = 'insert into collections_table set ?'
        connection.query(selectsql,(error,results,fields)=>{
            // console.log(results);
            // console.log(results[0]);
            // console.log(results[0].paintid);
            
            if (error) console.log(error.message);

            iscollect = true;
            for(let i = 0 ; i<results.length;i++){
                if(data.paintid === results[i].paintid){
                    iscollect = false;
                    break;
                }
            }
            if(!iscollect){
                console.log('已经收藏');
                db = { state: 200, message: '该作品已收藏', content: iscollect };
            }else{
                connection.query(insertsql,data);
                console.log('收藏成功');
                db = { state: 200, message: '收藏成功', content: iscollect };
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
})

module.exports = router;