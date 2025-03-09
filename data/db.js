const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'corso139',
    database: 'db_blog'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('connection to mysql')
})

module.exports = connection;
