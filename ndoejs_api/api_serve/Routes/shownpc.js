const connection = require('./usemysql');
const express = require('express');
const router = express.Router();

var db = {};
var isOK = false;

router.get('/',(req,res)=>{
    let npcidsql = 'select distinct npcid from npc_table';
    connection.query(npcidsql, (error,result,fields)=> {
        let sql = 'select * from npc_table where ';
        for(let i = 0;i<result.length;i++){
            if(i === 0)
                sql=sql+'npcnum="'+result[i].npcid+'001" ';
            else
                sql=sql+'or npcnum="'+result[i].npcid+'001" ';
        }
        // console.log(sql);
        connection.query(sql, (error,results,fields)=> {
            // console.log(results);
            if (error) {console.log(error.message);isOK=false;}
            if(JSON.stringify(results) === '[]'){isOK = false;}else{isOK = true;}
            if(!isOK){
                db = { state: 200, message: '获取失败', content: results };
            }else{
                db = { state: 200, message: '获取成功', content: results };
            }; 
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });        
    });

})

module.exports = router;