const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var issave = false;
var db={};

let insertsql = 'INSERT into paint_table_new SET ?';
let insertworksql = 'INSERT into works_table SET ?';

router.post('/',(req,res)=>{
    let paint = {
        paintid:'',
        userid:'',
        paintdata:'',
        type:'admin',
        describe:'admin',
        history:'',
        col:20,
        raw:20
    }
    let mywork = {
        paintid:'',
        userid:''
    }
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        data = JSON.parse(data);

        paint.userid = data.userid;
        paint.paintid = data.paintid;
        paint.paintdata = data.paintdata;
        paint.history = data.history;
        
        mywork.paintid = data.paintid;
        mywork.userid = data.userid;

        issave = true;
        // if (error) {console.log(error.message);issave = false;};
        if(!issave){
            console.log("save failed");
            db = { state: 200, message: '保存失败', content: issave };
        }else{
            console.log("save successfully");
            db = { state: 200, message: '保存成功', content: issave };
            connection.query(insertsql,paint);
            connection.query(insertworksql,mywork);
        };
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(db);
    });
});

module.exports = router;