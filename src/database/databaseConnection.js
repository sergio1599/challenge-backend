
require('dotenv').config();
const Sequelize = require('sequelize');
const { ConnectionString } = require('connection-string');
const cs = new ConnectionString(process.env.CONNECTION_URI);
const { name } = cs.hosts?.[0];


const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.PASSWORD, {
    host: name,
    dialect: 'mysql',
});

module.exports = sequelize; 
