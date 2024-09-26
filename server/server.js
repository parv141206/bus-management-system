const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/mongodb')
const path = require('path')
const session = require('express-session')

const app = express()
const PORT = 5000
const HOST = 'localhost'

app.use(cors())
app.use(bodyParser.json())
app.use(
  session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
)

connectDB()

app.use('/api/buses', require('./routes/bus.routes'))
app.use('/api/user', require('./routes/user.routes'))

// app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use('/', require('./routes/view.routes'))

app.listen(PORT, HOST, () =>
  console.log(`Listening on port http://${HOST}:${PORT}`)
)
