const mongoose = require('mongoose')

const BusSchema = new mongoose.Schema({
  from: String,
  to: String,
  departure: Date,
  arrival: Date,
})

const Bus = mongoose.model('Bus', BusSchema)

module.exports = Bus
