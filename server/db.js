const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Elsa$123',
    database:'todotaskmanager'
})

module.exports = connection;