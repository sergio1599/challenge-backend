const { DataTypes } = require('sequelize');
const sequelize = require('../database/databaseConnection');


const noteModel = sequelize.define('notes', {
    idNote: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isArchived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});

module.exports = noteModel;