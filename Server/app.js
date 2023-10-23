const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const multer = require('multer');

const orderRoutes = require('./routes/order')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')
const sessionRoutes = require('./routes/session')
const adminRoutes = require('./routes/admin')

const app = express()

const fileStorage = multer.diskStorage({
  destination: (req, multer, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  },
})
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).array('file'))

app.use(cors())
app.use('/images', express.static(__dirname + '/images'))

app.use(authRoutes)
app.use(productRoutes)
app.use(orderRoutes)
app.use(sessionRoutes)
app.use(adminRoutes)

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.opblshg.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    const server = app.listen(process.env.PORT || 5000)
    const io = require('./socket').init(server)
    io.on('connection', socket => {
      console.log('Client connected.');
    })
  })
  .catch(err => console.log(err))
