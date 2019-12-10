const express = require('express');
const router = express.Router();
const connection = require('../Routes/usemysql');

var db = {};
var isset = false;

router.post('/',(req,res)=>{
    var oldpaintid = '';
    var user = {
        paintid:'',
        userid:'',
        paintdata:'',
        type:'',
        describe:''
    }
    
    var data = '';
    
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);
        
        oldpaintid = data.oldpaintid;
        
        let updatesql = 'UPDATE paint_table SET ? where paintid="'+oldpaintid+'"';
        let selectsql = 'SELECT * from paint_table where paintid="'+oldpaintid+'"';

        user.paintid = data.paintid;
        user.userid = data.userid;
        user.paintdata = data.paintdata;
        user.type = data.type;
        user.describe = data.describe;

        connection.query(selectsql, (error,results,fields)=> {
            if (error) {console.log(error.message);isset = false;}

            if(JSON.stringify(results) === '[]'){
                isset = false;
            }else{
                isset = true;
            } 
            // console.log(user);
            // console.log(results);
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