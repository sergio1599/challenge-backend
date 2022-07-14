const { DataTypes } = require('sequelize');
const sequelize = require('../database/databaseConnection');

const categoryModel = sequelize.define('category', {
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
    }

});

sequelize.sync();
module.exports = categoryModel;