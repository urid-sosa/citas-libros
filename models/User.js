const Sequelize = require('sequelize');

const db = require('../config/db');
const User = db.define('User', {
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
    direccion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefono:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nombreLibro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    fechaPrestamo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    fechaDevolucion:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;