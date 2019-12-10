const express = require('express');
const router = express.Router();
const connection = require('../Routes/usemysql');

var db = {};
var isset = false;

router.post('/',(req,res)=>{
    var oldcollect = {
        userid:'',
        paintid:''
    }
    var collect = {
        userid:'',
        paintid:''
    }
    
    var data = '';
    
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        
        oldcollect.userid = data.olduserid;
        oldcollect.paintid = data.oldpaintid;
        
        let updatesql = 'UPDATE collections_table SET ? where userid="'+oldcollect.userid+'" and paintid="'+oldcollect.paintid+'"';
        let selectsql = 'SELECT * from collections_table where userid="'+oldcollect.userid+'" and paintid="'+oldcollect.paintid+'"';

        collect.userid = data.userid;
        collect.paintid = data.paintid;

        // console.log(collect);
        // console.log(oldcollect);
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
                connection.query(updatesql,collect);
                // console.log("修改成功");
                db = { state: 200, message: '修改成功', content: isset };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    });
});

module.exports = router;