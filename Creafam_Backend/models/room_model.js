const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Booking = sequelize.define('booking_data', {
    Nro_Cabaña: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    guestName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guestDNI: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    checkInDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

module.exports = Booking;
