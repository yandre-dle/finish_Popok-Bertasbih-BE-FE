const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'dle',
    password: 'abc12345',
    database: 'popokpedia_abcd',
    port: 3306
});

module.exports = conn; 