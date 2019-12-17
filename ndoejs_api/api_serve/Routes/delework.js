/**
 * 删除作品接口：(get)
 * 传入userid、paintid
 * 返回是否删除成功
 */
const connection = require('../Routes/usemysql');
const express = require('express');
const router = express.Router();

var userName = '';
var paintName = '';
var db = {};
var isOK = false;

router.get('/',(req,res)=>{
    userName = req.query.userid;
    paintName = req.query.paintid;
    let delepaintsql = 'delete from paint_table_new where paintid="'+paintName+'"';
    let deleworksql = 'delete from works_table where userid="'+userName+'" and paintid="'+paintName+'"';

    isOK = true;
    
    if(isOK){
        connection.query(deleworksql);
        connection.query(delepaintsql);
        // console.log('删除成功');
        db = { state: 200, message: '删除成功', content: isOK };
    }else{
        // console.log('删除失败');
        db = { state: 200, message: '删除失败', content: isOK };
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(db);
})

module.exports = router;