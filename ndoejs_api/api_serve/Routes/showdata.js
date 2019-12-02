/**
 * 显示数据库数据
 * 根据传入参数sql（select）
 * 在数据库中查找对应信息并显示
 */
const connection = require('./usemysql');

function showdata (res,sql){
    connection.query(sql, (error,results,fields)=> {
        if (error) console.log(error.message);
        // console.log(sql);
        // console.log(results);
        //对象解析为json字符串// results = JSON.stringify(results);
        var db = { state: 200, message: '获取成功', content: results };
        var data = JSON.stringify(db);
        // console.log(data);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200,{'Content-Type':'text/plain;charset="utf-8"'});
        res.end(data);
        // console.log(data);
    });
}
module.exports = showdata;