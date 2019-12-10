const express = require('express');
const router = express.Router();
const connection = require('../Routes/usemysql');

var isOK = false;
var db = {};

var selectsql = 'SELECT * FROM paint_table';

var insertsql = 'INSERT into paint_table SET ?';

router.post('/',(req,res)=>{
    var paint = {
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
        
        paint.paintid = data.paintid;
        paint.userid = data.userid;
        paint.paintdata = data.paintdata;
        paint.type = data.type;
        paint.describe = data.describe;
        // console.log(paint);

        connection.query(selectsql, (error,results,fields)=> {
            if (error) console.log(error.message);
            isOK = true;
            for(let i=0;i<results.length;i++){
                if(results[i].paintid === paint.paintid){
                    isOK = false;
                }
            }
            // console.log(isOK);
            if(isOK){
                connection.query(insertsql,paint);
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