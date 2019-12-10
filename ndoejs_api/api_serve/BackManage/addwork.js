const express = require('express');
const router = express.Router();
const connection = require('../Routes/usemysql');

var isOK = false;
var db = {};

var selectsql = 'SELECT * FROM works_table';

var insertsql = 'INSERT into works_table SET ?';

router.post('/',(req,res)=>{
    var work = {
        userid:'',
        paintid:''
    }
    var data = '';
    
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        
        work.userid = data.userid;
        work.paintid = data.paintid;
        // console.log(work);

        connection.query(selectsql, (error,results,fields)=> {
            if (error) console.log(error.message);
            isOK = true;
            for(let i=0;i<results.length;i++){
                if(results[i].userid === work.userid && results[i].paintid === work.paintid){
                    isOK = false;
                }
            }
            if(isOK){
                connection.query(insertsql,work);
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