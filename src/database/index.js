// IMPORT MYSQL
const mysql = require('mysql');

// CREATE CONNECTION DATABASE MYSQL
const db = mysql.createConnection({
    user        : 'root',
    password    : 'P@5$w0rd',
    host        : 'localhost',
    database    : 'remedialbackend',
    port        : '3306'
});

module.exports = db;