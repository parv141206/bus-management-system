const { default: mongoose } = require('mongoose')

const BookingSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  seat: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})
