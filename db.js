const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'web'

});

module.exports = con;

//npm install mysql2

//node --watch app 