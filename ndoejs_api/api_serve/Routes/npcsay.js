const express = require('express');
const router = express.Router();

var arr = [
        '色彩的明、暗程度称为色彩的明度。',
        '没有办法调和出来的颜色称之为“原色”，你知道三原色是哪三个吗？',
        '你知道吗，美术上的三原色是：红黄蓝，而光学上的三原色却是：红绿蓝',
        '在美术画作中巧妙的运用0.618的黄金分割比例进行绘画，会使画作更漂亮哦~',
        '三间色是：橙、绿、紫，与三原色不同哦~',
        '红+黄=橙;蓝+黄=绿;红+蓝=紫 <-- 三间色顾名思义是三原色相交出的颜色。',
        '暖色中有红、橙、黄三种颜色，冷色以蓝、紫两种颜色为主。',
        '画作的派别有：印象派、抽象派、表现派、超现实主义、浪漫主义、立体派……',
        '色彩的三要素是：纯度、明度、色相',
        '绘画的种类有很多，我们知道的有：蜡笔画、水彩画、版画、中国画、油画……'
    ];

router.get('/',(req,res)=>{

    let num = Math.floor(Math.random()*arr.length);
    // console.log(num);

    db = { state: 200, message: '获取成功', content: arr[num] };
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(db);
})

module.exports = router;