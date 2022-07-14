const mysql = require('mysql');
const { ConnectionString } = require('connection-string');

const cs = new ConnectionString(process.env.CONNECTION_URI);
console.log(process.env.CONNECTION_URI);
const { name } = cs.hosts?.[0];

const connection = mysql.createConnection({
    host: name,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect(err => {
    if (err) throw new Error(`Error connecting to database: ${err.message}`);
    console.log(`Connected successfully to database: ${name}`);
});

module.exports = connection; 
