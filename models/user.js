const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const User = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_type: {
        type: DataTypes.ENUM('student', 'teacher', 'admin'),
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },


});

module.exports = User;