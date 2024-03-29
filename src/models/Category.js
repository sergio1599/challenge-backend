const { DataTypes } = require('sequelize');
const sequelize = require('../database/databaseConnection');

const categoryModel = sequelize.define('category', {
    idCategory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }

});

module.exports = categoryModel;