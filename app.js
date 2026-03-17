const express = require('express');
const path = require('path');
const app = express();
const con = require('./db');

app.use(express.json());



//login
app.post('/login', function (req, res) {
    const { username, password } = req.body;

    // connect to DB and verify username and password
    const sql = "SELECT id,role FROM `user` WHERE username=? AND password=?;"
    con.query(sql, [username, password], function (err, results) {
        if (err) {
           return res.status(500).send('Server error')
        }
        if (results.length != 1) {
            return res.status(401).send('Login failed');
        }
        res.status(200).send('Login success');
        //no else 

        // if (err) {
        //     res.status(500).send('Server error')
        // } else {
        //     if (results.length != 1) {
        //         // 1. no match 
        //         res.status(401).send('Login failed');
        //     } else {
        //         // 2. get a row 
        //         res.status(200).send('Login success');
        //     }
        // }
    });
});



// root service ใส่ก่อนเริ่ม server
app.get('/', function (req, res) {
    
    res.status(200).sendFile(path.join(__dirname, 'views/login.html'));
});

app.listen(3000, function () {
    console.log('Sever is running at 3000')
});