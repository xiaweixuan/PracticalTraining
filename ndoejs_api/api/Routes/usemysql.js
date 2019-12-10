/**
 * 数据库连接
 */
const db = require('mysql');
 
let connection = db.createConnection({
    host:'localhost',
    user:'xwx',
    password:'123456',
    database:'practical_tarining'
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting:'+err.stack);
      return;
    }
});
module.exports = connection;