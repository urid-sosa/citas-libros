const Sequelize = require('sequelize');

const db = require('../config/db');
const Commentary = db.define('Commentary', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    apellidos: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Commentary;