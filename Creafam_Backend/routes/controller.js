const express = require('express');
const router = express.Router();
const Booking = require('../models/room_model');

// Create a new booking
router.post('/', async (req, res) => {
    
    const { Nro_Cabaña, guestName, guestDNI, checkInDate, checkOutDate } = req.body;
    try {
        const isBusy = await Booking.findByPk(req.params.id);
        if (isBusy) {
            res.json({ message: 'Esta cabaña no esta disponible para las fechas seleccionadas'});
        } else {
            const booking = await Booking.create({ Nro_Cabaña, guestName, guestDNI, checkInDate, checkOutDate });
            res.status(201).json(booking);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.findAll();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific booking
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking) {
            res.json(booking);
        } else {
            res.status(404).json({ message: 'Cannot find booking' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a booking
router.put('/:id', async (req, res) => {
    const { Nro_Cabaña, guestName, guestDNI, checkInDate, checkOutDate } = req.body;
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking) {
            booking.Nro_Cabaña = Nro_Cabaña !== undefined ? Nro_Cabaña : booking.Nro_Cabaña;
            booking.guestName = guestName !== undefined ? guestName : booking.guestName;
            booking.guestDNI = guestDNI !== undefined ? guestDNI : booking.guestDNI;
            booking.checkInDate = checkInDate !== undefined ? checkInDate : booking.checkInDate;
            booking.checkOutDate = checkOutDate !== undefined ? checkOutDate : booking.checkOutDate;
            await booking.save();
            res.json(booking);
        } else {
            res.status(404).json({ message: 'Cannot find booking' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking) {
            await booking.destroy();
            res.json({ message: 'Deleted booking' });
        } else {
            res.status(404).json({ message: 'Cannot find booking' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
