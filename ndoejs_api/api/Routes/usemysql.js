const db = require('mysql');
const express = require('express');
const app = express();
 
let connection = db.createConnection({
    host:'47.94.174.80',
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