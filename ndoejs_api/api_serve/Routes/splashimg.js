/**
 * 闪屏图片接口：(get)
 * 返回随机img
 */

const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/',(req,res)=>{
    const files = fs.readdirSync(__dirname+'/img');
    var num = Math.floor(Math.random()*files.length);
    // console.log(num);
    // console.log(files[0]);
    // console.log(files.length);

    res.setHeader('Access-Control-Allow-Origin', '*');
    fs.readFile(__dirname+'/img/'+files[num],'binary',(err, file) => {
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