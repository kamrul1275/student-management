const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Student = sequelize.define('Student_data', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student;