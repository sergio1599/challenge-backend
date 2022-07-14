const { DataTypes } = require('sequelize');
const sequelize = require('../database/databaseConnection');


const noteModel = sequelize.define('notes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = noteModel;