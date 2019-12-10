const connection = require('../Routes/usemysql');
const express = require('express');
const router = express.Router();

var paintName = '';
var db = {};
var isOK = false;

router.get('/',(req,res)=>{
    paintName = req.query.paintid;
    let deletesql = 'delete from paint_table where paintid="'+paintName+'"';
    let selectsql = 'select * from paint_table where paintid ="'+paintName+'"';
    connection.query(selectsql,(error,results)=>{
        if (error) {console.log(error.message);}
        isOK = false;
        if(typeof results[0] === 'undefined'){
            isOK = false;
        }else if(results[0].paintid === paintName){
            isOK = true;
        }
        
        if(isOK){
            connection.query(deletesql);
            // console.log('删除成功');
            db = { state: 200, message: '删除成功', content: isOK };
        }else{
            // console.log('删除失败');
            db = { state: 200, message: '删除失败', content: isOK };
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(db);
    });
})

module.exports = router;