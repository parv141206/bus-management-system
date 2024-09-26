const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  })
  const savedUser = await user.save()
  res.json(savedUser)
})

router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if (user) {
    const isValid = await bcrypt.compare(req.body.password, user.password)
    if (isValid) {
      req.session.user = user
      res.json(user)
    } else {
      res.json(null)
    }
  } else {
    res.json(null)
  }
})
module.exports = router
