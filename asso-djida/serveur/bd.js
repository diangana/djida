var mysql   = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'djida_bd'
});
module.exports=connection;
