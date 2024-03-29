const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogsRouter')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })
  
app.use(blogsRouter)
app.use(cors())
app.use(express.static('build'))
app.use(express.json())





module.exports = app