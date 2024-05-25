const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/db');


dotenv.config();

const app = express();
app.use(bodyParser.json());

const bookingsRouter = require('./routes/controller');
app.use('/bookings', bookingsRouter);

sequelize.sync().then(() => {
    console.log('Database synced');
});

module.exports = app;
