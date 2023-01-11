const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: null,
    database: 'teman_selin'
});

connection.connect();

module.exports = connection;