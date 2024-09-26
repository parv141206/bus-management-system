const express = require('express')
const router = express.Router()
const Bus = require('../models/Bus.model')

router.get('/', async (req, res) => {
  const buses = await Bus.find()
  res.json(buses)
})

router.post('/', async (req, res) => {
  const bus = new Bus({
    from: req.body.from,
    to: req.body.to,
    departure: req.body.departure,
    arrival: req.body.arrival,
  })
  const savedBus = await bus.save()
  res.json(savedBus)
})

module.exports = router
