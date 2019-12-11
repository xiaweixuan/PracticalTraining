const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

var userName = '';
var db = {};


router.get('/',(req,res)=>{
    //获取前端传入的userid
    userName = req.query.userid;
    let sql = 'select * from paint_table_new where userid="admin"';
    let selectsql = 'select paintid from paint_table_new where paintid in( select distinct paintid from collections_table where userid="'+userName+'")';

    connection.query(sql, (error,results,fields)=> {
        let paintarr = [];
        let paint = {
            paintid:'',
            userid:'',
            paintdata:'',
            type:'',
            describe:'',
            history:'',
            col:20,
            raw:20,
            iscollect:false};
        if (error) {console.log(error.message);}
        // console.log(results);
        connection.query(selectsql, (error,myresults,fields)=> {
            if (error) {console.log(error.message);}
            // console.log(myresults);
            // console.log(results);
            for(let i = 0 ;i<results.length;i++){
                paint = {
                    paintid:results[i].paintid,
                    userid:results[i].userid,
                    paintdata:results[i].paintdata,
                    type:results[i].type,
                    describe:results[i].describe,
                    history:results[i].history,
                    col:results[i].col,
                    raw:results[i].raw,
                    iscollect:false
                }
                for(let j = 0 ;j<myresults.length;j++){
                    // console.log(myresults.length);
                    if(results[i].paintid === myresults[j].paintid){
                        paint.iscollect = true;
                        break;
                    }
                }
                paintarr.push(paint);
            }
            // console.log(results.length);
            // console.log(myresults.length);
            // console.log(paintarr.length);
            db = { state: 200, message: '获取成功', content: paintarr }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        })
    });
})

module.exports = router;