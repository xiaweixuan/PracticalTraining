const express = require('express');
const router = express.Router();
const connection = require('../Routes/usemysql');

var db = {};
var isset = false;

router.post('/',(req,res)=>{
    var oldwork = {
        userid:'',
        paintid:''
    }
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
        
        oldwork.userid = data.olduserid;
        oldwork.paintid = data.oldpaintid;
        
        let updatesql = 'UPDATE works_table SET ? where userid="'+oldwork.userid+'" and paintid="'+oldwork.paintid+'"';
        let selectsql = 'SELECT * from works_table where userid="'+oldwork.userid+'" and paintid="'+oldwork.paintid+'"';

        work.userid = data.userid;
        work.paintid = data.paintid;

        // console.log(work);
        // console.log(oldwork);
        // console.log(updatesql);
        // console.log(selectsql);
        
        connection.query(selectsql, (error,results,fields)=> {
            if (error) {console.log(error.message);}

            if(JSON.stringify(results) === '[]'){
                isset = false;
            }else{
                isset = true;
            }
            if(!isset){
                // console.log("修改失败");
                db = { state: 200, message: '修改失败', content: isset };
            }else{
                connection.query(updatesql,work);
                // console.log("修改成功");
                db = { state: 200, message: '修改成功', content: isset };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    });
});

module.exports = router;