/**
 * 用户发布图片接口：(post)
 * 传入图片所有数据
 * 上传至数据库存储
 */
const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var isupdata = false;
var db={};

let insertsql = 'INSERT into paint_table_new SET ?';

router.post('/',(req,res)=>{
    let paint = {
        paintid:'',
        userid:'',
        paintdata:'',
        type:'',
        describe:'',
        history:'',
        col:20,
        raw:20
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
        paint.type = data.type;
        paint.describe = data.describe;
        paint.history = data.history;
        paint.col = data.col;
        paint.raw = data.raw;

        isupdata = true;
        // if (error) {console.log(error.message);isupdata = false;};
        if(!isupdata){
            console.log("updata failed");
            db = { state: 200, message: '上传失败', content: isupdata };
        }else{
            console.log("updata successfully");
            db = { state: 200, message: '上传成功', content: isupdata };
            connection.query(insertsql,paint);
        };
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(db);
    });
});

module.exports = router;