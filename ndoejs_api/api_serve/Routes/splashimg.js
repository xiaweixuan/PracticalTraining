/**
 * 闪屏图片接口：(get)
 * 返回随机img
 */

const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/',(req,res)=>{
    var num = Math.floor(Math.random()*7);
    // console.log(num);
    res.setHeader('Access-Control-Allow-Origin', '*');
    fs.readFile(__dirname+'/img/'+num+'.jpeg','binary',(err, file) => {
        if (err)  {
            console.log(err);
            return;
        }else{
            res.write(file,'binary');
            res.end();
        }
    });
})

module.exports = router;