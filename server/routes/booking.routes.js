const express = require('express')
const router = express.Router()
const Booking = require('../models/Booking.model')

router.get('/bookings', (req, res) => {
  Booking.find()
    .populate('id') // populate the bus document
    .populate('user') // populate the user document
    .then((bookings) => {
      res.render('bookings', { bookings })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).render('error')
    })
})

router.get('/bookings/:id', (req, res) => {
  const bookingId = req.params.id
  Booking.findById(bookingId)
    .populate('id') // populate the bus document
    .populate('user') // populate the user document
    .then((booking) => {
      if (!booking) {
        return res.status(404).render('not-found')
      }
      res.render('booking', { booking })
    })
    .catch((err) => {
      console.error(err)
      res.status(500).render('error')
    })
})
