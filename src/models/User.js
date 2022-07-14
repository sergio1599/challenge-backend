const { DataTypes } = require('sequelize');
const sequelize = require('../database/databaseConnection');

const userModel = sequelize.define('user', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


module.exports = userModel;