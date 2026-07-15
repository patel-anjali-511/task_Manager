require('dotenv').config()
const express = require('express')
const app = express()
const connectedToDb = require('./config/database')
const taskRouter = require('./routes/taskRoutes')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/tasks', taskRouter)

connectedToDb()

app.use(errorHandler)

module.exports = app