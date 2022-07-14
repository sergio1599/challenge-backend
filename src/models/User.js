const Sequelize = require('sequelize');
const sequelize = require('../database/databaseConnection');

const userModel = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    }, 
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}); 

sequelize.sync();
module.exports = userModel;