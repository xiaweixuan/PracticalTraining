const connection = require('./usemysql');
const express = require('express');
const router = express.Router();

var npcid ='';
var db = {};
var isOK = false;

router.get('/',(req,res)=>{
    npcid = req.query.npcid;

    let sql = 'select * from npc_table where npcid="'+npcid+'"';

    connection.query(sql, (error,results,fields)=> {
        if (error) {console.log(error.message);isOK=false;}
        if(JSON.stringify(results) === '[]'){isOK = false;}else{isOK = true;}
        if(!isOK){
            db = { state: 200, message: '获取失败', content: results ,length:results.length};
        }else{
            db = { state: 200, message: '获取成功', content: results  ,length:results.length};
        }; 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(db);
    });        
})

module.exports = router;