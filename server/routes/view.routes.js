const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const Bus = require('../models/Bus.model')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/dashboard', (req, res, next) => {
  authMiddleware(req, res, () => {
    Bus.find()
      .then((buses) => {
        res.render('dashboard', { buses })
      })
      .catch((err) => {
        console.error(err)
        res.status(500).render('error')
      })
  })
})

router.get('/login', (req, res) => {
  if (req.session.user) {
    return res.redirect('/dashboard')
  }
  res.render('login')
})

module.exports = router
