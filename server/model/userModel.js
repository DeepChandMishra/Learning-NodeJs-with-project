// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig/dbconfig'); 

const Users = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

(async () => {
    try {
        await sequelize.sync(); 
        console.log("Users table created");
    } catch (error) {
        console.error("Error syncing the database:", error);
    }
})();

module.exports = Users;
