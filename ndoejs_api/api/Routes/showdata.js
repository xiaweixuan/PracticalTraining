const express = require('express');
const router = express.Router();
const connection = require('./usemysql');

function showdata (res,sql,num=''){
    connection.query(sql,num, (error,results,fields)=> {
        // console.log(sql);
        // console.log(results);
        //对象解析为json字符串// results = JSON.stringify(results);
        var db = { state: 200, message: '获取成功', content: results };
        var data = JSON.stringify(db);
        // console.log(data);
        res.writeHead(200,{'Content-Type':'text/plain;charset="utf-8"'});
        res.end(data);
        // console.log(data);
    });
}
module.exports = showdata;